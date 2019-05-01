import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
  state = {
    cmsnamenetgats: "",
    cmsemailnetgats: "",
    cmsnotesnetgats: "",
    name: "",
    email: "",
    notes: "",
  }

  encode = (data) => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}` )
      .join("&");
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitHandler = e => {
    e.preventDefault()

    if (
      this.state.name === "" &&
      this.state.email === "" &&
      this.state.notes === ""
    ) {
      // then submit form to netlify CMS
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: this.encode({
          "form-name": "contact",
          name: this.state.cmsnamenetgats,
          email: this.state.cmsemailnetgats,
          notes: this.state.cmsnotesnetgats,
        })
      })
      .then(() => {
        alert("Success!");
        this.setState({
          cmsnamenetgats: "",
          cmsemailnetgats: "",
          cmsnotesnetgats: "",
          name: "",
          email: "",
          notes: "",
        });
      })
      .catch(err => console.log(err));
    } else {
      console.log("Honeypot detected spam attack!");
      this.setState({
          cmsnamenetgats: "",
          cmsemailnetgats: "",
          cmsnotesnetgats: "",
          name: "",
          email: "",
          notes: "",
      });
    }
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const ohnohoney = {
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      height: 0,
      width: 0,
      zIndex: -1,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact Page" />
        <h1>Contact Form</h1>
        <p>
          If you have any queries or interest in Gatsby development, please get
          in touch with us:
        </p>

        <form
          name="contact"
          onSubmit={this.submitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "50px auto",
            justifyContent: "center",
            alignItems: "space-evenly",
          }}
          data-netlify-honeypot="bot-field" 
          data-netlify="true"
        >
          { /* <input style={ohnohoney} type="hidden" name="form-name" value="contact" /> */}
          <label htmlFor="cmsnamenetgats" style={{ marginBottom: "18px" }}>
            Name &nbsp;&nbsp;
            <input
              type="text"
              name="cmsnamenetgats"
              id="cmsnamenetgats"
              maxLength="100"
              placeholder="Your name here"
              onChange={this.changeHandler}
              value={this.state.cmsnamenetgats}
            />
          </label>
          <label htmlFor="cmsemailnetgats" style={{ marginBottom: "18px" }}>
            Email &nbsp;&nbsp;
            <input
              type="email"
              name="cmsemailnetgats"
              id="cmsemailnetgats"
              placeholder="Your e-mail here"
              onChange={this.changeHandler}
              value={this.state.cmsemailnetgats}
            />
          </label>
          <label htmlFor="cmsnotesnetgats" style={{ marginBottom: "18px" }}>
            Notes &nbsp;&nbsp;
            <textarea
              name="cmsnotesnetgats"
              id="cmsnotesnetgats"
              placeholder="Your notes here"
              onChange={this.changeHandler}
              value={this.state.cmsnotesnetgats}
            />
          </label>

          <label style={ohnohoney} htmlFor="name">
            Name &nbsp;&nbsp;
            <input
              style={ohnohoney}
              type="text"
              name="name"
              id="name"
              placeholder="Your name here"
              autoComplete="off"
              onChange={this.changeHandler}
              value={this.state.name}
            />
          </label>
          <label style={ohnohoney} htmlFor="email">
            Email &nbsp;&nbsp;
            <input
              style={ohnohoney}
              type="text"
              name="email"
              id="email"
              placeholder="Your e-mail here"
              autoComplete="off"
              onChange={this.changeHandler}
              value={this.state.email}
            />
          </label>
          <label style={ohnohoney} htmlFor="notes">
            Notes &nbsp;&nbsp;
            <textarea
              style={ohnohoney}
              name="notes"
              id="notes"
              placeholder="Your notes here"
              autoComplete="off"
              onChange={this.changeHandler}
              value={this.state.notes}
            />
          </label>
          <label style={ohnohoney} >
            Don’t fill this out if you're human: 
            <input name="bot-field" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
