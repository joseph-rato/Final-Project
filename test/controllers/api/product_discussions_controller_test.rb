require 'test_helper'

class Api::ProductDiscussionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_product_discussions_create_url
    assert_response :success
  end

  test "should get show" do
    get api_product_discussions_show_url
    assert_response :success
  end

  test "should get update" do
    get api_product_discussions_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_product_discussions_destroy_url
    assert_response :success
  end

end
