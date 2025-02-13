import { Route, Router } from "@solidjs/router";
import BlogPage from "./pages/BlogPage";

export default function Root() {
  return (
    <Router>
      <Route path="/" component={BlogPage} />
    </Router>
  );
}
