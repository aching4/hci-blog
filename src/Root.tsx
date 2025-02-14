import { Navigate, Route, Router } from "@solidjs/router";
import BlogPage from "./pages/BlogPage";
import BlogContentPage from "./pages/BlogContentPage";

export default function Root() {
  return (
    <Router>
      <Route path="/" component={() => <Navigate href={"/hci-blog"} />} />
      <Route path="/hci-blog" component={BlogPage} />
      <Route path="/hci-blog/:id" component={BlogContentPage} />
    </Router>
  );
}
