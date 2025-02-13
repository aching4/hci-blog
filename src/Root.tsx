import { Navigate, Route, Router } from "@solidjs/router";
import BlogPage from "./pages/BlogPage";

export default function Root() {
  return (
    <Router>
      <Route path="/" component={() => <Navigate href={"/hci-blog"} />} />
      <Route path="/hci-blog" component={BlogPage} />
    </Router>
  );
}
