defmodule EmployeeList.Router do
  use EmployeeList.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    get "/employees", EmployeeList.EmployeeController, :index
  end

  scope "/", EmployeeList do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", EmployeeList do
  #   pipe_through :api
  # end
end
