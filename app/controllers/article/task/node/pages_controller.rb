class Article::Task::Node::PagesController < ApplicationController
  include SS::Task::BaseFilter
  include Cms::ReleaseFilter::Page

  public
    def generate
      generate_node_with_pagination params[:node]
    end
end
