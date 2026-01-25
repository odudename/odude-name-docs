export default {
    logo: (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span style={{ fontWeight: 800 }}>Odude Docs</span>
        </>
    ),
    project: {
        link: 'https://github.com/odude/odude_pc_docs'
    },
    chat: {
        link: 'https://discord.gg/odude'
    },
    docsRepositoryBase: 'https://github.com/odude/odude_pc_docs/tree/main',
    footer: {
        text: (
            <span>
                {new Date().getFullYear()} © <a href="https://odude.com" target="_blank">Odude</a>.
            </span>
        )
    },
    editLink: {
        text: 'Edit this page on GitHub'
    },
    feedback: {
        content: 'Question? Give us feedback →',
        labels: 'feedback'
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Odude Docs" />
            <meta property="og:description" content="The official documentation for Odude projects." />
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Odude Docs'
        }
    }
}

