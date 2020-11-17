import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import location from 'location-href';

import styles from './styles.module.css';

function NotFound() {
  if(location().match(/\/docs\/[0-9]+$/)) {
    var imageFile = "undraw_void_3ggu.svg";
    var message = (<div><p>The requested help document has not yet been published.</p><p>Please browse the available documentation <a href={useBaseUrl("/")+"docs/"}>here</a> instead.</p></div>); // append 'docs/' onto baseUrl for the situation where baseUrl is 'docs' (which results in useBaseUrl('/docs/') returning '/docs/' rather than '/docs/docs')
  } else {
    var imageFile = "undraw_empty_xct9.svg";
    var message = (<div><p>We could not find what you were looking for.</p><p>Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p></div>);
  }
  return (
    <Layout title="Page Not Found">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className={clsx("col col--6 col--offset-3", styles.notFoundContainer)}>
            <img src={useBaseUrl("/img/" + imageFile)} className={clsx("margin-bottom--lg", styles.notFoundImage)}/>
            <h1 className="hero__title">Page Not Found</h1>
            {message}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;