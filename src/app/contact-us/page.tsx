"use client";

import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";

const ContactPage = () => {
    return (
        <section className="w-full bg-background px-[26px] min-[744px]:px-[42px] min-[1080px]:px-[150px] pt-[60px] pb-25">
            <div className="mx-auto w-full max-w-[1140px]">
                {/* Heading */}
                <div className="mx-auto  text-center">
                    <Reveal className="mx-auto text-center">

                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight text-foreground">
                            We are here for you
                        </h2>

                        <p className="mx-auto mt-4 max-w-[941px] text-base leading-7 text-secondary sm:text-lg md:text-xl lg:text-[26px]">
                            Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly
                        </p>
                        <Reveal delay={0.12} className="mt-[30px]">
                            <Breadcrumb
                                items={[
                                    { label: "Home", href: "/" },
                                    { label: "Contact Us", href: "/contact-us" },
                                ]}
                            />
                        </Reveal>
                    </Reveal>
                </div>

                {/* Contact Card */}
                <div className="mx-auto grid w-full min-w-0 grid-cols-1 items-stretch gap-10 py-10 min-[1200px]:grid-cols-2 min-[1200px]:gap-12 min-[1200px]:py-[80px]">
                    {/* Left - Contact Form */}
                    <Reveal direction="right" className="w-full min-w-0">
                        <div className="flex flex-col items-start">

                            <h2 className="text-[22px] md:text-[26px] font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                                Get in touch with us
                            </h2>

                            <p className="mt-4 max-w-xl text-[18px] md:text-[22px] lg:text-[26px] leading-7 text-secondary sm:text-lg">
                                Have a question or need assistance? Send us a message and
                                our team will get back to you as soon as possible.
                            </p>

                            <form className="mt-8 flex w-full flex-col gap-5">

                                {/* Name */}
                                <div className="flex flex-col gap-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                        className="h-[56px] w-full rounded-xl border border-[#272626] bg-surface px-5 text-base text-foreground outline-none transition-colors placeholder:text-secondary focus:border-brand"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                        className="h-[56px] w-full rounded-xl border border-[#272626] bg-surface px-5 text-base text-foreground outline-none transition-colors placeholder:text-secondary focus:border-brand"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-2">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Message"
                                        className="w-full resize-none rounded-xl border border-[#272626] bg-surface px-5 py-4 text-base text-foreground outline-none transition-colors placeholder:text-secondary focus:border-brand"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="mt-2 w-full rounded-xl bg-brand px-6 py-4 text-base font-semibold text-background transition-opacity hover:opacity-85"
                                >
                                    Submit
                                </button>

                            </form>
                        </div>
                    </Reveal>

                    {/* Right - Image */}
                    <Reveal
                        direction="left"
                        delay={0.12}
                        className="w-full min-w-0"
                    >
                        <div className="relative h-full min-h-[350px] w-full overflow-hidden rounded-[20px] bg-surface">
                            <Image
                                src="/assets/contact/contact.png"
                                alt="Contact our team"
                                fill
                                sizes="(min-width: 1200px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    )
}

export default ContactPage
