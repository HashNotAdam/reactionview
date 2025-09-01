import { groupIconVitePlugin } from "vitepress-plugin-group-icons"

function createBuildStartPlugin() {
  return {
    name: 'reactionview-build-start',
    async buildStart() {
      console.log('🚀 Build starting - ReActionView docs...')
    },
    configResolved(config) {
      console.log(`📋 Build mode: ${config.command}`)
    }
  }
}

export function createViteConfig() {
  // https://vp.yuy1n.io/features.html
  // https://github.com/vscode-icons/vscode-icons/wiki/ListOfFiles
  const groupIconPlugin = groupIconVitePlugin({
    customIcon: {
      ruby: "vscode-icons:file-type-ruby",
      ".rb": "vscode-icons:file-type-ruby",
      ".gemspec": "vscode-icons:file-type-ruby",
      gemfile: "vscode-icons:file-type-bundler",
      browser: "vscode-icons:file-type-js",
      "Node.js": "vscode-icons:file-type-js",
      ".js": "vscode-icons:file-type-js",
      javascript: "vscode-icons:file-type-js",
      shell: "vscode-icons:file-type-shell",
      ".erb": "vscode-icons:file-type-html",
      ".html.erb": "vscode-icons:file-type-html",
      ".herb": "vscode-icons:file-type-html",
    },
  })

  const buildStartPlugin = createBuildStartPlugin()

  return {
    plugins: [groupIconPlugin, buildStartPlugin],
  }
}
