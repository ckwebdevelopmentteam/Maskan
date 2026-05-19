"use client";
export default function HeroMobileClient() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <video
        className="size-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/motion_2.0-fast_behide_the_maskan_logo_and_writing_all_the_content_should_happen_2_male_workers_-0.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
