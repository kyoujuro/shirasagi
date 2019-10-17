class Gws::Affair::DutyHour
  include SS::Document
  include Gws::Referenceable
  include Gws::Reference::User
  include Gws::Reference::Site
  include Gws::Affair::DutyHourSetting
  include Gws::Addon::Member
  include Gws::Addon::Affair::Holiday
  include Gws::Addon::History
  include Gws::SitePermission

  member_ids_optional

  seqid :id
  field :name, type: String

  permit_params :name

  validates :name, presence: true

  class << self
    def search(params)
      criteria = self.where({})
      return criteria if params.blank?

      if params[:name].present?
        criteria = criteria.search_text params[:name]
      end
      if params[:keyword].present?
        criteria = criteria.keyword_in params[:keyword], :name
      end
      criteria
    end
  end
end