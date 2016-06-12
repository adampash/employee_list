defmodule EmployeeList.PageController do
  use EmployeeList.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
