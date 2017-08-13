import React, { Component } from "react";
import Helmet from "react-helmet";

class AdminPage extends Component {
  render() {
    return (
      <div className="admin">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Content Manager</title>

          <link
            rel="stylesheet"
            href="https://unpkg.com/netlify-cms@~0.4/dist/cms.css"
          />
          <script src="https://unpkg.com/netlify-cms@~0.4/dist/cms.js" />
        </Helmet>
      </div>
    );
  }
}

export default AdminPage;
