const fs = require('fs');
fetch('https://www.linkedin.com/posts/rachel-rajkumar-176480343_paperpresentation-governmentcollegeofengineering-activity-7412157009090936833-WhLr')
  .then(res => res.text())
  .then(html => {
    const match = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) {
      const imgUrl = match[1].replace(/&amp;/g, '&');
      console.log("Found URL: ", imgUrl);
      return fetch(imgUrl).then(res => res.arrayBuffer()).then(buffer => {
        fs.writeFileSync('public/paper_war_cert.jpg', Buffer.from(buffer));
        console.log('Saved to public/paper_war_cert.jpg');
      });
    } else {
      console.log('No og:image found');
    }
  });
