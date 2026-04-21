import { useEffect } from 'react'

type PageMetaProps = {
    title: string
    description: string
}

export default function PageMeta({ title, description }: PageMetaProps) {
    useEffect(() => {
        document.title = title
        const descriptionMeta = document.querySelector('meta[name="description"]')
        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', description)
        }
    }, [title, description])

    return null
}
