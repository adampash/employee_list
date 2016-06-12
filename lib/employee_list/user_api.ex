defmodule EmployeeList.UserAPI do
  use HTTPoison.Base

  @user_api "https://randomuser.me/api/"
  @expected_fields ~w(
    cell email name picture
  )

  # This is a simple API to request page, no. of results, and a seed—just
  # params I'm planning to use from the randomuser.me api.
  def fetch(options \\ %{}) do
    get!(@user_api, [], params: options)
  end

  # This is a callback built into HTTPoison to massage my response data
  def process_response_body(body) do
    body
    |> Poison.decode!
    |> Map.get("results")
    |> extract_fields
  end

  # only returning fields I'm using on the front end
  def extract_fields(list) do
    results = Enum.map(list, &Map.take(&1, @expected_fields))
    %{results: results}
  end
end
