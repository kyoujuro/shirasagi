require 'spec_helper'

describe "gws_schedule_facility_plans", type: :feature, dbscope: :example, js: true do
  let(:site) { gws_site }
  let(:facility) { create :gws_facility_item }

  context "with auth" do
    let!(:item) { create :gws_schedule_facility_plan, facility_ids: [facility.id] }
    let(:index_path) { gws_schedule_facility_plans_path site, facility }
    let(:new_path) { new_gws_schedule_facility_plan_path site, facility }
    let(:show_path) { gws_schedule_facility_plan_path site, facility, item }
    let(:edit_path) { edit_gws_schedule_facility_plan_path site, facility, item }
    let(:delete_path) { soft_delete_gws_schedule_facility_plan_path site, facility, item }

    before { login_gws_user }

    it "#index" do
      visit index_path
      wait_for_ajax
      expect(current_path).not_to eq sns_login_path
      expect(page).to have_content(item.name)
    end

    it "#events" do
      today = Time.zone.today
      sdate = today - today.day + 1.day
      edate = sdate + 1.month
      visit "#{index_path}/events.json?s[start]=#{sdate}&s[end]=#{edate}"
      expect(page.body).to have_content(item.name)
    end

    it "#new" do
      visit new_path
      within "form#item-form" do
        fill_in "item[name]", with: "name"
        fill_in "item[start_at]", with: "2016/04/01 12:00"
        fill_in "item[end_at]", with: "2016/04/01 13:00"
        click_button I18n.t('gws/schedule.facility_reservation.index')
      end
      wait_for_cbox do
        click_on I18n.t('ss.buttons.close')
      end
      within 'form#item-form' do
        click_button I18n.t('ss.buttons.save')
      end

      wait_for_ajax
      expect(page).to have_css('#notice', text: I18n.t('ss.notice.saved'))
    end

    it "#show" do
      visit show_path
      expect(page).to have_content(item.name)
    end

    it "#edit" do
      visit edit_path
      within "form#item-form" do
        fill_in "item[name]", with: "modify"
        click_button I18n.t('ss.buttons.save')
      end
      wait_for_ajax
      expect(page).to have_css('#notice', text: I18n.t('ss.notice.saved'))
    end

    it "#delete" do
      visit index_path
      first('span.fc-title', text: item.name).click
      click_link I18n.t('ss.links.delete')
      within "form" do
        click_button I18n.t('ss.buttons.delete')
      end
      wait_for_ajax
      expect(current_path).to eq index_path
      expect(page).to have_css('#notice', text: I18n.t('ss.notice.deleted'))
    end
  end

  context "with max_days_limit" do
    let(:now) { Time.zone.now.change(month: 8, hour: 9) }
    let(:plan_name) { unique_id }

    shared_examples "a facility plan reservation" do
      before do
        facility.max_days_limit = 30
        facility.readable_member_ids = facility_readable_member_ids
        facility.user_ids = facility_user_ids
        facility.save!

        site.schedule_max_years = 0
        site.schedule_max_month = 3
        site.save!
      end

      it do
        Timecop.freeze(now) do
          login_user user

          visit gws_schedule_facility_plans_path(site: site, facility: facility)
          click_on I18n.t("gws/schedule.links.add_plan")

          within "#item-form" do
            fill_in "item[name]", with: plan_name
            fill_in "item[start_at]", with: I18n.l(start_at, format: :picker)
            # !!!be cafeful!!!
            # it is required to input twice
            fill_in "item[end_at]", with: I18n.l(end_at, format: :picker)
            fill_in "item[end_at]", with: I18n.l(end_at, format: :picker)
            click_on I18n.t("ss.buttons.save")
          end
          expect(page).to have_css(css_class, text: message)
          # wait for ajax
          expect(page).to have_content(plan_name)
        end
      end
    end

    context "with normal user" do
      let(:role) { create :gws_role, :gws_role_schedule_plan_editor, :gws_role_facility_item_user }
      let!(:user) { create :gws_user, gws_role_ids: [ role.id ], group_ids: gws_user.group_ids }
      let(:facility_readable_member_ids) { [ user.id ] }
      let(:facility_user_ids) { [] }

      context "when end_at is at the facility limit" do
        let(:start_at) { end_at - 1.hour }
        let(:end_at) { now + facility.max_days_limit.days }
        let(:css_class) { '#notice' }
        let(:message) { I18n.t('ss.notice.saved') }

        it_behaves_like "a facility plan reservation"
      end

      context "when end_at is over the facility limit" do
        let(:start_at) { end_at - 1.hour }
        let(:end_at) { now + facility.max_days_limit.days + 1.minute }
        let(:css_class) { '#errorExplanation' }
        let(:message) { I18n.t("gws/schedule.errors.faciliy_day_lte", count: facility.max_days_limit) }

        it_behaves_like "a facility plan reservation"
      end
    end

    context "with facility admin" do
      let(:role) { create :gws_role, :gws_role_schedule_plan_editor, :gws_role_facility_item_admin }
      let!(:user) { create :gws_user, gws_role_ids: [ role.id ], group_ids: gws_user.group_ids }
      let(:facility_readable_member_ids) { [ user.id ] }
      let(:facility_user_ids) { [ user.id ] }

      context "when end_at is at the limit" do
        let(:start_at) { end_at - 1.hour }
        let(:end_at) { now + facility.max_days_limit.days }
        let(:css_class) { '#notice' }
        let(:message) { I18n.t('ss.notice.saved') }

        it_behaves_like "a facility plan reservation"
      end

      context "when end_at is over the facility limit" do
        let(:start_at) { end_at - 1.hour }
        let(:end_at) { now + facility.max_days_limit.days + 1.minute }
        let(:css_class) { '#notice' }
        let(:message) { I18n.t('ss.notice.saved') }

        it_behaves_like "a facility plan reservation"
      end

      context "when start_at is over the site limit" do
        let(:start_at) { site.schedule_max_at.in_time_zone + 1.day + 10.hours }
        let(:end_at) { start_at + 1.hour }
        let(:css_class) { '#errorExplanation' }
        let(:message) { I18n.t('gws/schedule.errors.less_than_max_date', date: I18n.l(site.schedule_max_at, format: :long)) }

        it_behaves_like "a facility plan reservation"
      end
    end
  end

  describe "what all-day plan is" do
    let(:name) { unique_id }
    let(:start_on) { Time.zone.parse("2016/09/09") }
    let(:end_on) { Time.zone.parse("2016/09/11") }

    before { login_gws_user }

    it do
      visit gws_schedule_facility_plans_path(site: site, facility: facility)
      click_on I18n.t("gws/schedule.links.add_plan")
      within "form#item-form" do
        fill_in "item[name]", with: name
        check "item_allday"
        fill_in "item[start_on]", with: I18n.l(start_on, format: :picker) + "\n"
        fill_in "item[end_on]", with: I18n.l(end_on, format: :picker) + "\n"
        click_on I18n.t("ss.buttons.save")
      end
      expect(page).to have_css('#notice', text: I18n.t('ss.notice.saved'))
      expect(page).to have_css(".fc-title", text: name)

      expect(Gws::Schedule::Plan.all.count).to eq 1
      Gws::Schedule::Plan.all.first.tap do |plan|
        expect(plan.name).to eq name
        expect(plan.start_on).to eq start_on.to_date
        expect(plan.end_on).to eq end_on.to_date
        expect(plan.start_at).to eq start_on
        expect(plan.end_at).to eq end_on.end_of_day.change(usec: 0)
        expect(plan.allday).to eq "allday"
        expect(plan.facility_ids).to have(1).item
        expect(plan.facility_ids).to include(facility.id)
      end
    end
  end
end
