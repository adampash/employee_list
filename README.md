# EmployeeList
If you don't want to run it locally, I've deployed it [here](https://employeelist.io.adampash.com).

If you _do_ want to run it locally, clone it, then:

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
- [x] Build out backend to access randomuser API
  - [x] Create a module to access the randomuser API and return results with front end requirements
  - [x] Hook controller into UserAPI module
- [x] Refactor front end to use backend API
- [x] Make it look not awful
- [ ] Add filtering and pagination

# Notes
You'll notice I didn't add any filtering or pagination. The backend is all ready for this, but I also think it's probably overkill for the exercise.

I've also deployed it [here](https://employeelist.io.adampash.com) if you just want to see it without putting it on your machine (I don't know if you've got Elixir already installed for the purpose).

To be perfectly honest, I actually forgot to check in my code when I refactored the front end to use the back end, so if the commit times look off, that's probably it. (That said, I also think I worked it all out, so commits should be clean.)
