const express = require("express");
// creating express app
const app = express();
app.set("view engine", "ejs");

app.listen(3000);
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "The Mysteries of Dark Matter",
      description:
        "Explore the enigmatic world of dark matter, the invisible substance that makes up most of the universe. Discover the latest research and theories that seek to unravel this cosmic mystery.",
    },
    {
      title: "The Rise of CRISPR and Gene Editing",
      description:
        "Learn about CRISPR technology and how it's revolutionizing genetics. From curing genetic diseases to enhancing crops, this blog delves into the potential and ethical implications of gene editing.",
    },
    {
      title: "Climate Change: Understanding the Science",
      description:
        "A comprehensive look at the science behind climate change, its impacts on our planet, and what can be done to mitigate its effects. Understand the role of greenhouse gases, global warming, and more.",
    },
  ];

  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/about-me", (req, res) => {
  res.render("about", { title: "Create" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a blog" });
});
// 404 page

app.use((req, res) => {
  res.status(404).render("404");
});
