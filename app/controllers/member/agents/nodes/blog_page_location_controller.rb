class Member::Agents::Nodes::BlogPageLocationController < ApplicationController
  include Cms::NodeFilter::View

  model Member::BlogPage

  helper Cms::ListHelper

  before_action :accept_cors_request, only: [:rss]

  def pages
    @model.public_list(site: @cur_site, node: @cur_node, date: @cur_date)
  end

  def index
    @items = pages.
      order_by(@cur_node.sort_hash).
      page(params[:page]).
      per(@cur_node.limit)

    render_with_pagination @items
  end

  def rss
    @items = pages.
      order_by(released: -1).
      limit(@cur_node.limit)

    render_rss @cur_node, @items
  end
end
