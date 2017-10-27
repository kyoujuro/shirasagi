class Gws::Column::DateField < Gws::Column::Base

  field :place_holder, type: String
  # field :html_tag, type: String
  # field :html_additional_attr, type: String, default: ''

  # validates :html_tag, inclusion: { in: %w(span time), allow_blank: true }
  permit_params :place_holder, :html_tag, :html_additional_attr

  # def html_tag_options
  #   %w(span time).map do |v|
  #     [ I18n.t("gws.options.html_tag.#{v}", default: v), v ]
  #   end
  # end

  def form_options
    # options = additional_attr_to_h
    options = {}
    options['placeholder'] = place_holder if place_holder.present?
    options['class'] = %w(date js-date)
    options
  end

  def serialize_value(value)
    # Gws::Column::Value::DateField.new(
    #   column_id: self.id, name: self.name, order: self.order, html_tag: self.html_tag,
    #   html_additional_attr: self.html_additional_attr, date: value
    # )
    Gws::Column::Value::DateField.new(
      column_id: self.id, name: self.name, order: self.order, date: value
    )
  end
end