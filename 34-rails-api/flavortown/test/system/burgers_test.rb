require "application_system_test_case"

class BurgersTest < ApplicationSystemTestCase
  setup do
    @burger = burgers(:one)
  end

  test "visiting the index" do
    visit burgers_url
    assert_selector "h1", text: "Burgers"
  end

  test "creating a Burger" do
    visit burgers_url
    click_on "New Burger"

    fill_in "Meat", with: @burger.meat
    fill_in "Seed", with: @burger.seed
    fill_in "Toppings", with: @burger.toppings
    click_on "Create Burger"

    assert_text "Burger was successfully created"
    click_on "Back"
  end

  test "updating a Burger" do
    visit burgers_url
    click_on "Edit", match: :first

    fill_in "Meat", with: @burger.meat
    fill_in "Seed", with: @burger.seed
    fill_in "Toppings", with: @burger.toppings
    click_on "Update Burger"

    assert_text "Burger was successfully updated"
    click_on "Back"
  end

  test "destroying a Burger" do
    visit burgers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Burger was successfully destroyed"
  end
end
