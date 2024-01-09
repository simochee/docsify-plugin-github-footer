import "./index.css";
import htm from "htm/mini";
import urlJoin from "url-join";
import vhtml from "vhtml";

const html = htm.bind(vhtml);

const PLUGIN_CONFIG_NAME = "githubFooter";

/** プラグインをインストール */
const install = (hook, vm) => {
  $docsify[PLUGIN_CONFIG_NAME] ||= {};
  const { repo = $docsify.repo, ref, dir = "" } = $docsify[PLUGIN_CONFIG_NAME];
  const [, owner, repository] =
    /(?:github\.com\/)?([^/]+)\/([^/]+)/.exec(repo || "") || [];

  if (!owner || !repository || !ref) {
    console.warn(`[docsify-plugin-github-footer] required options is not set.`);

    return;
  }

  hook.afterEach((source) => {
    const { file } = vm.route;

    const nav = html`
      <ul class="docsify-github-footer">
        <li>
          <a
            href=${urlJoin(
              "https://github.com",
              owner,
              repository,
              "edit",
              ref,
              dir,
              file,
            )}
            target="_blank"
          >
            ✍️
            <span>Edit on GitHub</span>
          </a>
        </li>
        <li>
          <a
            href=${urlJoin(
              "https://github.dev",
              owner,
              repository,
              "blob",
              ref,
              dir,
              file,
            )}
            target="_blank"
          >
            🖥
            <span>Open in github.dev</span>
          </a>
        </li>
        <li>
          <a
            href=${urlJoin(
              "https://github.com",
              owner,
              repository,
              "commits",
              ref,
              dir,
              file,
            )}
            target="_blank"
          >
            ⏱️
            <span>View History</span>
          </a>
        </li>
      </ul>
    `;

    return `${source}${nav}`;
  });
};

$docsify.plugins = [].concat(install, $docsify.plugins);
