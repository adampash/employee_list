defmodule EmployeeList.EmployeeController do
  use EmployeeList.Web, :controller
  alias EmployeeList.UserAPI

  @results 25
  @seed "ap_test"

  # This endpoint will be available at /employees?page=n
  # to provide some simple pagination to the front end.
  def index(conn, %{"page" => page}) do
    %{body: body} = UserAPI.fetch(
      %{results: @results, seed: @seed, page: page}
    )
    json(conn, %{employees: body.results})
  end
end
