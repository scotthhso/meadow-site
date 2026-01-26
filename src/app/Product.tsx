import { FadeIn } from "./UiHelpers";

export const Product = ({ meadow }: { meadow: any }) => {
	return (
		<div className="bg-[#FFF8F0]">
			<section
				id="product"
				className="mx-auto max-w-6xl scroll-mt-24 px-6 py-12 pb-12"
			>
				<FadeIn>
					<div>
						<h2 className="font-condensed text-3xl font-semibold tracking-tight text-[#42531D]">
							Product
						</h2>
						<p className="text-neutral-800">Origin: Guizhou</p>
					</div>
					<p className="mt-2 max-w-2xl text-neutral-600">
						Choose your profile. Sizes are flexible; samples on request.
					</p>
				</FadeIn>

				<div className="mt-8 grid gap-6 ">
					{meadow.grades.map((g: any, i: number) => (
						<FadeIn key={g.key} delay={0.05 * i}>
							<div className="grid items-stretch gap-4 rounded-3xl border border-neutral-200 bg-white p-4 md:grid-cols-[7fr_3fr]">
								<div className="min-w-0 flex flex-col justify-between gap-4">
									<div>
										<div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-base text-emerald-800">
											{g.name}
										</div>
										<dl className="mt-3 grid gap-3 text-lg text-neutral-700">
											<div>
												<dt className="font-medium text-neutral-900">
													Description
												</dt>
												<dd style={{ fontSize: 16 }}>{g.description}</dd>
											</div>
											<div>
												<dt className="font-medium text-neutral-900">Taste</dt>
												<dd style={{ fontSize: 16 }}>{g.taste}</dd>
											</div>
											<div>
												<dt className="font-medium text-neutral-900">Color</dt>
												<dd style={{ fontSize: 16 }}>{g.color}</dd>
											</div>
										</dl>
									</div>
								</div>
								<div className="overflow-hidden rounded-2xl border border-neutral-200">
									<img
										src={g.photo}
										alt={`${g.name} matcha`}
										className="object-cover"
										style={{ width: "100%", height: "100%" }}
										loading="lazy"
									/>
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</section>
		</div>
	);
};
