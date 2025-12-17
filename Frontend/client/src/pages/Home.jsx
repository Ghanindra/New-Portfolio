// ======================= pages/Home.jsx =======================
import React from "react";
import Hero from "../components/home/Hero";
import SkillsPreview from "../components/home/SkillsPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ContactCTA from "../components/home/ContactCTA";


export default function Home() {
return (
<div>
<Hero />
<SkillsPreview />
<ProjectsPreview />
<ContactCTA />
</div>
);
}