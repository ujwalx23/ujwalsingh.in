<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="/rss/channel/title"/> &#8226; Web Feed</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=JetBrains+Mono:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
        <style>
          :root {
            --bg: #090d16;
            --card-bg: rgba(17, 24, 39, 0.75);
            --card-border: rgba(99, 102, 241, 0.2);
            --card-border-hover: rgba(129, 140, 248, 0.45);
            --banner-bg: linear-gradient(135deg, rgba(30, 27, 75, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%);
            --banner-border: rgba(129, 140, 248, 0.35);
            --primary: #6366f1;
            --primary-light: #818cf8;
            --primary-glow: rgba(99, 102, 241, 0.25);
            --accent: #38bdf8;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --text-subtle: #64748b;
            --badge-bg: rgba(99, 102, 241, 0.15);
            --badge-border: rgba(129, 140, 248, 0.25);
            --badge-text: #c7d2fe;
            --button-bg: #4f46e5;
            --button-hover: #4338ca;
            --input-bg: rgba(15, 23, 42, 0.8);
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: var(--bg);
            background-image: 
              radial-gradient(circle at 15% 10%, rgba(99, 102, 241, 0.18) 0%, transparent 40%),
              radial-gradient(circle at 85% 60%, rgba(56, 189, 248, 0.12) 0%, transparent 45%),
              radial-gradient(circle at 50% 90%, rgba(139, 92, 246, 0.12) 0%, transparent 50%);
            background-attachment: fixed;
            color: var(--text-main);
            line-height: 1.6;
            padding: 2rem 1rem 4rem;
            min-height: 100vh;
          }

          .container {
            max-width: 860px;
            margin: 0 auto;
          }

          .top-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2rem;
            padding-bottom: 1.25rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .brand-link {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            text-decoration: none;
            color: var(--text-main);
            font-weight: 700;
            font-size: 1.05rem;
            letter-spacing: -0.01em;
            transition: color 0.2s ease;
          }

          .brand-link:hover {
            color: var(--accent);
          }

          .brand-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: linear-gradient(135deg, var(--primary) 0%, #a855f7 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            color: #ffffff;
            font-size: 0.9rem;
            box-shadow: 0 2px 10px var(--primary-glow);
          }

          .home-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            text-decoration: none;
            color: var(--text-muted);
            font-size: 0.85rem;
            font-weight: 600;
            padding: 0.45rem 0.9rem;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.2s ease;
          }

          .home-btn:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.18);
            transform: translateY(-1px);
          }

          .rss-banner {
            background: var(--banner-bg);
            border: 1px solid var(--banner-border);
            border-radius: 18px;
            padding: 2rem 2rem 1.75rem;
            margin-bottom: 2.5rem;
            box-shadow: 0 12px 36px -10px rgba(0, 0, 0, 0.5), 0 0 24px var(--primary-glow);
            backdrop-filter: blur(16px);
            position: relative;
            overflow: hidden;
          }

          .rss-banner::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #6366f1, #38bdf8, #a855f7, #6366f1);
            background-size: 200% 100%;
            animation: shimmer 6s linear infinite;
          }

          @keyframes shimmer {
            0% { background-position: 0% 0; }
            100% { background-position: 200% 0; }
          }

          .banner-badge-row {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.6rem;
            margin-bottom: 1rem;
          }

          .feed-type-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background: rgba(99, 102, 241, 0.2);
            color: var(--badge-text);
            border: 1px solid var(--badge-border);
            padding: 0.25rem 0.65rem;
            border-radius: 999px;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }

          .live-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: #22c55e;
            box-shadow: 0 0 8px #22c55e;
            animation: pulse 2s infinite ease-in-out;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(0.85); }
          }

          .banner-title {
            font-size: 1.75rem;
            font-weight: 800;
            line-height: 1.25;
            margin-bottom: 0.6rem;
            background: linear-gradient(135deg, #ffffff 30%, #c7d2fe 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.02em;
          }

          .banner-description {
            color: var(--text-muted);
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            max-width: 740px;
          }

          .subscribe-box {
            background: var(--input-bg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 0.5rem 0.5rem 0.5rem 1rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            margin-bottom: 1.25rem;
            transition: border-color 0.2s ease;
          }

          .subscribe-box:focus-within {
            border-color: var(--primary-light);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
          }

          .feed-url-input {
            background: transparent;
            border: none;
            outline: none;
            color: #ffffff;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            width: 100%;
            cursor: text;
          }

          .copy-btn {
            background: var(--button-bg);
            color: #ffffff;
            border: none;
            font-family: inherit;
            font-size: 0.82rem;
            font-weight: 600;
            padding: 0.55rem 1.15rem;
            border-radius: 8px;
            cursor: pointer;
            white-space: nowrap;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            transition: all 0.2s ease;
          }

          .copy-btn:hover {
            background: var(--button-hover);
            transform: translateY(-1px);
          }

          .copy-btn.copied {
            background: #16a34a;
          }

          .banner-footer-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
            font-size: 0.78rem;
            color: var(--text-subtle);
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 1rem;
          }

          .compatible-readers {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
          }

          .reader-tag {
            background: rgba(255, 255, 255, 0.05);
            padding: 0.15rem 0.55rem;
            border-radius: 6px;
            color: var(--text-muted);
            font-size: 0.72rem;
            font-weight: 500;
          }

          .section-title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.25rem;
            padding: 0 0.25rem;
          }

          .section-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: #ffffff;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .items-count {
            background: rgba(255, 255, 255, 0.07);
            color: var(--text-muted);
            font-size: 0.72rem;
            font-weight: 600;
            padding: 0.2rem 0.6rem;
            border-radius: 999px;
          }

          .articles-list {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .article-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 16px;
            padding: 1.6rem;
            transition: all 0.25s ease;
            backdrop-filter: blur(12px);
            position: relative;
          }

          .article-card:hover {
            border-color: var(--card-border-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.4), 0 0 16px var(--primary-glow);
          }

          .article-header {
            margin-bottom: 0.85rem;
          }

          .article-meta-row {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.65rem;
            margin-bottom: 0.6rem;
            font-size: 0.78rem;
            color: var(--text-subtle);
          }

          .article-date {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            color: var(--text-muted);
            font-weight: 500;
          }

          .categories-container {
            display: inline-flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.35rem;
          }

          .category-pill {
            background: var(--badge-bg);
            border: 1px solid var(--badge-border);
            color: var(--badge-text);
            padding: 0.15rem 0.55rem;
            border-radius: 6px;
            font-size: 0.7rem;
            font-weight: 600;
          }

          .article-title {
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 1.35;
            margin-bottom: 0.65rem;
          }

          .article-title a {
            color: var(--text-main);
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .article-title a:hover {
            color: var(--accent);
          }

          .article-description {
            color: var(--text-muted);
            font-size: 0.92rem;
            line-height: 1.65;
            margin-bottom: 1.25rem;
          }

          .article-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 0.75rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            font-size: 0.8rem;
          }

          .article-author {
            color: var(--text-subtle);
            font-size: 0.78rem;
          }

          .article-link-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            text-decoration: none;
            color: var(--accent);
            font-weight: 600;
            font-size: 0.82rem;
            transition: gap 0.2s ease, color 0.2s ease;
          }

          .article-link-btn:hover {
            color: #ffffff;
            gap: 0.55rem;
          }

          .site-footer {
            margin-top: 3.5rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            text-align: center;
            color: var(--text-subtle);
            font-size: 0.8rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            align-items: center;
          }

          .footer-links {
            display: flex;
            gap: 1.25rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .footer-links a {
            color: var(--text-muted);
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .footer-links a:hover {
            color: var(--accent);
          }

          @media (max-width: 640px) {
            body {
              padding: 1.25rem 0.85rem 3rem;
            }
            .rss-banner {
              padding: 1.4rem 1.2rem;
            }
            .banner-title {
              font-size: 1.35rem;
            }
            .subscribe-box {
              flex-direction: column;
              align-items: stretch;
              padding: 0.75rem;
            }
            .copy-btn {
              justify-content: center;
            }
            .article-card {
              padding: 1.2rem;
            }
            .article-title {
              font-size: 1.1rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header class="top-bar">
            <a href="https://ujwalsingh.in" class="brand-link">
              <span class="brand-icon">US</span>
              <span>Ujwal Singh</span>
            </a>
            <a href="https://ujwalsingh.in" class="home-btn">
              <span>Return to Portfolio</span>
              <span>&#8594;</span>
            </a>
          </header>

          <section class="rss-banner">
            <div class="banner-badge-row">
              <span class="feed-type-pill">
                <span class="live-dot"></span>
                <span>RSS 2.0 Web Feed</span>
              </span>
              <span class="feed-type-pill">Live Syndication</span>
            </div>

            <h1 class="banner-title"><xsl:value-of select="/rss/channel/title"/></h1>
            
            <p class="banner-description">
              <xsl:value-of select="/rss/channel/description"/>
              <br/>
              This is a live RSS feed. You can preview all latest research publications, AI engineering insights, and software releases below, or subscribe using any feed reader by copying the URL.
            </p>

            <div class="subscribe-box">
              <input 
                id="feed-url-input" 
                class="feed-url-input" 
                type="text" 
                readonly="readonly" 
                value="https://ujwalsingh.in/rss.xml" 
                onclick="this.select();"
              />
              <button id="copy-btn" class="copy-btn" onclick="copyFeedUrl();">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>Copy Feed URL</span>
              </button>
            </div>

            <div class="banner-footer-info">
              <div class="compatible-readers">
                <span>Compatible with:</span>
                <span class="reader-tag">Feedly</span>
                <span class="reader-tag">Inoreader</span>
                <span class="reader-tag">NetNewsWire</span>
                <span class="reader-tag">Apple News</span>
                <span class="reader-tag">Reeder</span>
              </div>
              <div>
                <span>Last Updated: </span>
                <span style="color: var(--text-muted);"><xsl:value-of select="/rss/channel/lastBuildDate"/></span>
              </div>
            </div>
          </section>

          <div class="section-title-row">
            <h2 class="section-title">
              <span>Latest Publications &amp; Releases</span>
            </h2>
            <span class="items-count">
              <xsl:value-of select="count(/rss/channel/item)"/> items
            </span>
          </div>

          <div class="articles-list">
            <xsl:for-each select="/rss/channel/item">
              <article class="article-card">
                <header class="article-header">
                  <div class="article-meta-row">
                    <time class="article-date">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span><xsl:value-of select="pubDate"/></span>
                    </time>
                    <xsl:if test="category">
                      <div class="categories-container">
                        <xsl:for-each select="category">
                          <span class="category-pill"><xsl:value-of select="."/></span>
                        </xsl:for-each>
                      </div>
                    </xsl:if>
                  </div>
                  <h3 class="article-title">
                    <a>
                      <xsl:attribute name="href">
                        <xsl:value-of select="link"/>
                      </xsl:attribute>
                      <xsl:attribute name="target">_blank</xsl:attribute>
                      <xsl:attribute name="rel">noopener noreferrer</xsl:attribute>
                      <xsl:value-of select="title"/>
                    </a>
                  </h3>
                </header>

                <p class="article-description">
                  <xsl:value-of select="description"/>
                </p>

                <footer class="article-footer">
                  <span class="article-author">
                    Published by <xsl:value-of select="author"/>
                  </span>
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="link"/>
                    </xsl:attribute>
                    <xsl:attribute name="target">_blank</xsl:attribute>
                    <xsl:attribute name="rel">noopener noreferrer</xsl:attribute>
                    <xsl:attribute name="class">article-link-btn</xsl:attribute>
                    <span>Read Publication</span>
                    <span>&#8594;</span>
                  </a>
                </footer>
              </article>
            </xsl:for-each>
          </div>

          <footer class="site-footer">
            <div class="footer-links">
              <a href="https://ujwalsingh.in/">Home</a>
              <a href="https://ujwalsingh.in/research">Research</a>
              <a href="https://ujwalsingh.in/projects">Projects</a>
              <a href="https://ujwalsingh.in/blog">Blog</a>
              <a href="https://ujwalsingh.in/contact">Contact</a>
              <a href="https://ujwalsingh.in/llms.txt">llms.txt</a>
              <a href="https://ujwalsingh.in/sitemap.xml">Sitemap</a>
            </div>
            <p>&#169; 2026 Ujwal Singh. All rights reserved. Syndicated via RSS 2.0.</p>
          </footer>
        </div>

        <script type="text/javascript">
          function copyFeedUrl() {
            var input = document.getElementById("feed-url-input");
            var url = input ? input.value : "https://ujwalsingh.in/rss.xml";
            
            if (navigator.clipboard &amp;&amp; navigator.clipboard.writeText) {
              navigator.clipboard.writeText(url).then(function() {
                updateCopyButton();
              }).catch(function() {
                fallbackCopy(input);
              });
            } else {
              fallbackCopy(input);
            }
          }

          function fallbackCopy(input) {
            if (!input) return;
            input.focus();
            input.select();
            try {
              document.execCommand('copy');
              updateCopyButton();
            } catch (err) {}
          }

          function updateCopyButton() {
            var btn = document.getElementById("copy-btn");
            if (!btn) return;
            var originalHtml = btn.innerHTML;
            btn.innerHTML = "&lt;span&gt;&#10003; Copied Feed URL!&lt;/span&gt;";
            btn.classList.add("copied");
            setTimeout(function() {
              btn.innerHTML = originalHtml;
              btn.classList.remove("copied");
            }, 2500);
          }
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
