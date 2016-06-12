ExUnit.start

Mix.Task.run "ecto.create", ~w(-r EmployeeList.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r EmployeeList.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(EmployeeList.Repo)

