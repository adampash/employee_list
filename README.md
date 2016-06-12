# EmployeeList

To run locally:

```bash
# cd to project directory
mix deps.get
npm install
iex -S mix phoenix.server
```
Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

# TODO

- [x] Set up boilerplate
- [x] Build out front end with local mock data
- [ ] Build out backend to access randomuser API
  - [x] Create a module to access the randomuser API and return results with front end requirements
  - [ ] Hook controller into UserAPI module
- [ ] Refactor front end to use backend API
- [ ] Make it look not awful
- [ ] Add filtering and pagination
