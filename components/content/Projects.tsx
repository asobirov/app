import { TProjectCard } from '@lib/types'

import ProjectCard from '@components/ProjectCard';
import { MotionGrid } from '@components/Motion';

import kadabraPreview from '@public/preview/kadabra.png';
import sortVisPreview from '@public/preview/sortVis.png';

const projects: TProjectCard[] = [{
    title: 'Kadabra',
    description: 'Simpliified online shopping in Uzbekistan',
    image: kadabraPreview,
}, {
    title: "Sorting visualiser",
    description: "Visualisation of sorting algorithms",
    image: sortVisPreview
}];

const grid = {
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        transition: {
            when: "afterChildren",
        },
    },
}

const Projects = (props: any) => {

    return (
        <MotionGrid
            initial="hidden"
            animate="visible"
            variants={grid}
            gridTemplateColumns={{ base: 'repeat(1, minmax(0, 1fr))', sm: 'repeat(auto-fit, minmax(235px, 1fr))', md: 'repeat(2, minmax(0, 1fr))' }}
            gap={{ base: 3, sm: 3, md: 6 }}
            {...props}
        >
            {projects.map((project, key) => <ProjectCard key={key} {...project} />)}
        </MotionGrid>

    )
}

export default Projects
