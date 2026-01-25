import { notFound } from 'next/navigation'
import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('nextra')

export async function generateMetadata(props: any) {
    const params = await props.params
    const nextraParams = params.nextra || []

    if (nextraParams.length > 0 && nextraParams[0].startsWith('_')) {
        return {}
    }

    try {
        const { metadata } = await importPage(nextraParams)
        return metadata
    } catch {
        return {}
    }
}

export default async function Page(props: any) {
    const params = await props.params
    const nextraParams = params.nextra || []

    // Prevent Nextra from trying to handle its own internal requests as MDX pages
    if (nextraParams.length > 0 && nextraParams[0].startsWith('_')) {
        notFound()
    }

    try {
        const result = await importPage(nextraParams)
        if (!result) {
            notFound()
        }

        const { default: MDXContent, toc, metadata } = result
        const components = useMDXComponents({})

        return (
            <MDXContent {...props} components={components} />
        )
    } catch (e) {
        console.error('Nextra Page Load Error:', e)
        notFound()
    }
}
