defmodule EmployeeList.UserAPITest do
  use ExUnit.Case
  alias EmployeeList.UserAPI

  # I realize this is a very simple and dumb test, but for simple things
  # like this API request, the test is a nice way to sanity check
  # the module API and that I'm getting my data in the shape I want.
  # It's obviously not bulletproof test coverage or anything like that.
  test "can access API" do
    %{body: body} = UserAPI.fetch(%{results: 5, seed: "ex_test", page: 2})
    assert length(body.results) == 5
  end
end
