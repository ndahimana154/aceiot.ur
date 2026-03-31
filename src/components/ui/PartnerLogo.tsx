type PartnerLogoProps = {
    name: string
    src?: string
}

export default function PartnerLogo({ name, src }: PartnerLogoProps) {
    return (
        <div className="group flex h-24 items-center justify-center rounded-[28px] border border-slate-200 bg-white p-4 transition hover:shadow-lg">
            {src ? (
                <img src={src} alt={name} className="max-h-14 object-contain" />
            ) : (
                <span className="text-base font-semibold tracking-wide text-slate-700 transition group-hover:text-slate-900">
                    {name}
                </span>
            )}
        </div>
    )
}
