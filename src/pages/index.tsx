import { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { Layout } from '@/components/layouts/Layout';
import { Box, Container, Flex, HStack, Heading, Image, Link, Stack, Tag, Text, VStack, useMediaQuery } from '@chakra-ui/react';
import { HiSpeakerphone } from 'react-icons/hi';
import { PersonalizedQuote } from '@/components/PersonalizedQuote/PersonalizedQuote';
import { EmbeddedVideo } from '@/components/EmbeddedVideo/EmbeddedVideo';
import { FiBookOpen, FiEdit, FiFeather, FiGitCommit, FiLink2, FiMessageCircle, FiStar } from 'react-icons/fi';
import { CalloutWithIcon } from '@/components/CalloutWithIcon/CalloutWithIcon';

const Landing: NextPageWithLayout = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const joshwin = '/images/joshwin.png';
  const conrad = '/images/conrad.png';
  const ashley = '/images/ashley.jpeg';
  const ben = '/images/ben.jpeg';

  return (
    <>
      <Head>
        <title>Introducing Co-x3&apos;s Digital Gardening Initiative</title>
        <meta property="og:title" content="Introducing Co-x3's Digital Gardening Initiative" />
        <meta
          property="og:description"
          content="We are officially at the invite-only early access stage!"
        />
        <meta
          property="og:image"
          content="https://wgvegqevtmkbbnaufigr.supabase.co/storage/v1/object/public/public-images/dgc-landing-cover.png?t=2023-08-01T04%3A56%3A41.909Z"
        />
        <meta
          property="og:url"
          content="https://our.x3.garden/"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={'5xl'} padding={0}>
        <Box>
          <HStack spacing={2}>
            <HiSpeakerphone />
            <Text style={{ fontWeight: 'normal' }}>Announcement</Text>
          </HStack>
          <Heading mt={2}>Introducing Co-x3&apos;s Digital Gardening Initiative</Heading>
          <Text fontSize="lg" opacity={0.5} mt={2}>
            We are officially at the invite-only early access stage!
          </Text>
          <HStack spacing={3} mt={4}>
            {[ 'co-x3', 'digital garden' ].map((item, index) => <Tag borderRadius='30px' key={index} variant='solid' colorScheme='gray'>{ item }</Tag>)}
          </HStack>
          <VStack width="100%" mt={6} align='flex-start'>
            <HStack direction='row' width='100%'>
              <HStack width='100%'>
                <Image style={{ borderRadius: '20px', width: '40px', height: '40px' }} src={ joshwin } alt='Avatar Photo' />
                <Text>Joshwin</Text>
                <Image style={{ borderRadius: '20px', width: '40px', height: '40px' }} src={ conrad } alt='Avatar Photo' />
                <Text>Conrad</Text>
                <Image style={{ borderRadius: '20px', width: '40px', height: '40px' }} src={ ashley } alt='Avatar Photo' />
                <Text>Ashley</Text>
                <Image style={{ borderRadius: '20px', width: '40px', height: '40px' }} src={ ben } alt='Avatar Photo' />
                <Text>Benjamin</Text>
              </HStack>
              <VStack p={0} width='25%' align='flex-start' display={isMobile ? 'none' : 'block'}>
                <Text fontSize='xs'><Text as={'span'} fontWeight='bold'>Published:</Text> Tuesday, May 2nd</Text>
                <Text fontSize='xs'><Text as={'span'} fontWeight='bold'>Updated:</Text> Tuesday, Oct 24th</Text>
              </VStack>
            </HStack>
            <HStack display={isMobile ? 'block' : 'none'}>
                <Text fontSize='xs' display='inline'><Text as={'span'} fontWeight='bold'>Published:</Text> Tuesday, May 2nd</Text>
                <Text fontSize='xs' display='inline'><Text as={'span'} fontWeight='bold'>Updated:</Text> Sunday, May 14th</Text>
            </HStack>
          </VStack>
          <Image mt={7} style={{ width: '100%', borderRadius: '15px' }} src='/images/dgc-cover.png' alt='DGC Cover Photo' />
        </Box>
        <Flex flex={1} flexDir={'column'} mt={4}>
          <Heading as='h1' size='xl'>Introduction</Heading>
          <br />
          <Text>Gather around!</Text>
          <br />
          <Text>We are going to describe the story behind Co-x3&apos;s Digital Gardening Initiative! Get some popcorn and grab a chair. This is going to be a long one. Now, before we get into the meat of our adventure, we need to describe Co-x3 and a couple of terms for those new around here.</Text>
          <br />
          <Heading as='h3' size='md'>What is Co-x3?</Heading>
          <br />
          <Image style={{ width: '100%', borderRadius: '15px' }} src='/images/co-x3-graphic.png' fit='fill' alt='Co-x3 Cover Photo' />
          <br />
          <Text>Co-x3 is a non-profit community of co-creators and collaborators.</Text>
          <br />
          <Text>Our mission is to equip creatives, students, and second winders with knowledge to level up every day, tools to put their learning into action, and a community to never struggle alone.</Text>
          <br />
          <Text>Our community creates educational resources, tools, and events to empower creatives, students, and retirees who face barriers to personal/professional growth. We help them realize their potential, improve quality of life, and make positive impact.</Text>
          <br />
          <Text>We support members of our community by connecting them with mentors and peers to bring multiplayer to personal development and ensure they do not struggle alone. We celebrate wins together, share challenges, and find ways to be helpful on their growth journeys.</Text>
          <br />
          <Text>We’re building a global self-actualized community of co-creators and collaborators tackling global challenges and unleashing breakthroughs together.</Text>
          <br />
          <Heading as='h3' size='md'>What is a Digital Garden?</Heading>
          <br />
          <Text>A Digital Garden is essentially a blog where Digital Gardening takes place. When compared with blogging, Digital Gardening is the complete opposite when compared to it in the general sense. Instead of taking weeks to publish an essay, all you need is a title, a sentence or two, and some categorical information. That’s it. You are developing your ideas over time and in public.</Text>
          <br />
          <Heading as='h3' size='md'>What is a Community Digital Garden?</Heading>
          <br />
          <Text>A Community Digital Garden is a Digital Garden where multiple people participate in the submission of notes and essays. People are also able to work on the same piece. There usually is a moderation side of this as well.</Text>
          <br />
          <Heading as='h3' size='md'>This sounds like Wikipedia. How is a community digital garden different?</Heading>
          <br />
          <Text>Benjamin makes the difference quite clear:</Text>
          <br />
          <PersonalizedQuote
            name='Benjamin Covington'
            coverUrl={ben}
            quote='Wikipedia pages are limited to specific nouns and facts, leaving no room for creativity or dialogue. A community digital garden, on the other hand, is a vibrant and dynamic space where ideas can grow and flourish. It invites readers to participate and contribute their own thoughts and perspectives, rather than just consume information.'
            color='#6faac3'
          />
          <br />
          <Heading as='h1' size='xl'>The initial premise behind this initiative</Heading>
          <br />
          <Text>Conrad, the founder of Co-x3, started off this project with an implementation that used Obsidian, Gatsby, and Gatsby Garden. For reference, Gatsby Garden is a set of packages/libraries that help you create a digital garden using Gatsby.</Text>
          <br />
          <Text>This was his original goal for this project:</Text>
          <br />
          <PersonalizedQuote
            name='Conrad Lin'
            coverUrl={'/images/conrad.png'}
            quote="I'm planning to open-source this so that people in the community can also add their notes to our ever-growing content library and to really help people level up in their lives and learn what we know and hopefully take some action on the things that we care about as well. It’s about being intentional in our lives and making work fun."
            color='#2e3637'
          />
          <br />
          <Text>You can watch the entire livestream that he did here:</Text>
          <br />
          <EmbeddedVideo
            videoId='pm0mhkWj5ac'
          />
          <br />
          <Heading as='h3' size='md'>What if this was an app?</Heading>
          <br />
          <Text>After this livestream, ideas started to bubble up about what this could potentially look like as an app.</Text>
          <br />
          <Text>Joshwin suggested the following idea:</Text>
          <br />
          <PersonalizedQuote
            name='Joshwin Greene'
            coverUrl={'/images/joshwin.png'}
            quote="Here's a possible approach on how we could develop the Co-x3 knowledge base: 1) We manage the contributions of the articles/notes via an Obsidian Vault and a GitHub repo. To keep things simple, people can create forks and submit PRs when they want to submit or update an article/note. 2) We create a backend that fetches the articles/notes from the GitHub repo. We may be able to use n8n for this. 3) We create a basic web app frontend that fetches and renders the articles/notes from the backend. GitHub has a rate limit. So, that's why I'm not suggesting that the frontend should fetch the articles/notes from the GitHub repo directly. 4) When it comes to commenting, we could use Disqus or an open-source alternative, like Cusdis ( https://github.com/djyde/cusdis ). 5) When it comes to liking articles/notes, we could use something like https://likebtn.com/en/. 6) As for seeing a visualization on how an article/note connects to other items, we could probably bring over the system that Gatsby Garden uses. - I feel like this approach would save us a lot of time and effort."
            color='#34aa79'
          />
          <br />
          <Text>Ultimately, there were three MVPs (Minimum Viable Products) that we were considering:</Text>
          <br />
          <Text>(1) Content MVP - start pooling our notes together and create a repository</Text>
          <br />
          <Text>(2) System MVP - find a way to make a dynamic repository that spits out the content in a way that a front end can read</Text>
          <br />
          <Text>(3) Front End MVP - make it pretty</Text>
          <br />
          <Text>We would have our first official meeting about this project in the beginning of February 2022.</Text>
          <br />
          <Text>In the end, we decided to use the following technologies:</Text>
          <br />
          <Text><Text as={'span'} fontWeight='bold'>GitHub</Text> - We would create a repository where all of the notes and essays would be initially submitted and reviewed by moderators</Text>
          <br />
          <Text><Text as={'span'} fontWeight='bold'>n8n</Text> - When a note or essay or essay was approved and added to a specific folder in our GitHub repository, its contents and metadata would be pushed to a Supabase backend</Text>
          <br />
          <Text><Text as={'span'} fontWeight='bold'>Supabase</Text> - Our Supabase backend would serve as the data source for our community digital garden.</Text>
          <br />
          <Text><Text as={'span'} fontWeight='bold'>Locofy</Text> - We would use this tool to convert our designs in Figma to React. We would use the resulting code for the frontend of our community digital garden.</Text>
          <br />
          <Heading as='h3' size='md'>Some people might be wondering why we develop apps</Heading>
          <br />
          <PersonalizedQuote
            name='Conrad Lin'
            coverUrl={'/images/conrad.png'}
            quote="We all are constantly learning more about the world, and often only get to share our findings with our immediate friends and family. Worse still, most information is communicated via analogies and distilling down to first principles is difficult and uncommon. So, to tackle this, the Co-x3 Family are creating applications that make it easy to distill knowledge into first principles; building and sharing on what we know in a collaborative fashion."
            color='#2e3637'
          />
          <br />
          <Heading as='h1' size='xl'>Off to the Races! Let&apos;s get this built!</Heading>
          <br />
          <Heading as='h3' size='md'>User Stories</Heading>
          <br />
          <Text>Here’s a list of our MVP User Stories:</Text>
          <br />
          <Text>(1) As a reader, I want to be able to view the content that’s posted so that I can consume the posted knowledge.</Text>
          <br />
          <Text>(2) As a reader, I want see the edit history for content so that I can how an item has evolved over time.</Text>
          <br />
          <Text>(3) As a reader, I want to see the most recent posts so that I can see what has been newly created.</Text>
          <br />
          <Text>(4) As a reader, I want to see the all of the posts that have been written so that I can browse content that has been published.</Text>
          <br />
          <Heading as='h3' size='md'>Wireframes</Heading>
          <br />
          <Text>Here are the initial wireframes that we put together:</Text>
          <br />
          <Text fontWeight='bold'>Landing Page:</Text>
          <br />
          <Image src='/images/landing-page-wireframe.png' alt='landing page wireframe' style={{ border: '1px solid gray', borderRadius: '10px' }} />
          <br />
          <Text fontWeight='bold'>Content Page:</Text>
          <br />
          <Image src='/images/content-page-wireframe.png' alt='content page wireframe' style={{ border: '1px solid gray', borderRadius: '10px' }} />
          <br />
          <Heading as='h3' size='md'>Mockups</Heading>
          <br />
          <Text>Conrad converted our wireframes into mockups using Figma and added some much needed polish.</Text>
          <br />
          <Text>Here are a couple of previews of those mockups:</Text>
          <br />
          <Image src='/images/landing-page-mockup-preview.png' alt='landing page mockup' style={{ border: '1px solid gray', borderRadius: '10px' }} />
          <br />
          <Image src='/images/content-page-mockup-preview.png' alt='content page mockup' style={{ border: '1px solid gray', borderRadius: '10px' }} />
          <br />
          <Heading as='h3' size='md'>Locofy</Heading>
          <br />
          <Text>Conrad met with the Locofy team during one of Co-x3’s livestreams and they guided him through the process to convert our Figma designs to React code using Locofy.</Text>
          <br />
          <Text>You can watch that livestream here:</Text>
          <br />
          <EmbeddedVideo
            videoId='ms3VjY2Va7c'
          />
          <br />
          <Heading as='h3' size='md'>n8n workflow</Heading>
          <br />
          <Text>Here’s the n8n workflow that Joshwin put together:</Text>
          <br />
          <Image src='/images/final-n8n-workflow.png' alt='final n8n workflow' style={{ border: '1px solid gray', borderRadius: '10px' }} />
          <br />
          <Heading as='h3' size='md'>How could we give this technology to other communities and how can we make this product super intuitive?</Heading>
          <br />
          <Text>As things were coming together and we were choosing domain names, an interesting question was brought forward:</Text>
          <br />
          <PersonalizedQuote
            name='Conrad Lin'
            coverUrl={'/images/conrad.png'}
            quote="I wonder how we could give this community digital gardening technology to other communities."
            color='#2e3637'
          />
          <br />
          <Text>Additionally, while testing the process of submitting an item to our digital garden&apos;s repository on GitHub, we quickly realized that the number of steps to set things up for people, especially those new to tech, was honestly not acceptable.</Text>
          <br />
          <Heading as='h1' size='xl'>The Third Iteration</Heading>
          <br />
          <Text>With this iteration, it was time to go all in when it came to the user experience. So, we started with some user research.</Text>
          <br />
          <Heading as='h3' size='md'>User Research</Heading>
          <br />
          <Text>We first asked ourselves what we wanted individually and then we asked our community for their feedback so that we could have a better picture of the features that should be developed first.</Text>
          <br />
          <Text>In the end, we were able to survey the community for their “Must Haves,” “Nice to Haves,” and “Delighters” for the digital gardening technology that we were building.</Text>
          <br />
          <Text>Benjamin created the Notion database that was used to survey our community.</Text>
          <br />
          <Text>Here were the <Text as={'span'} fontWeight='bold'>Must Haves:</Text></Text>
          <br />
          <CalloutWithIcon
            color='#6faac3'
            text='Give users the ability to edit their own pieces and submit edits to others that must be approved by the original author(s)'
            icon={<FiEdit />}
            title='Editing'
          />
          <br />
          <CalloutWithIcon
            color='#6faac3'
            text='The ability to publish to a community digital garden, ex. the one for Co-x3.'
            icon={<FiStar />}
            title='Publish to Collaborative Digital Gardens'
          />
          <br />
          <CalloutWithIcon
            color='#6faac3'
            text='The ability to see other pieces that have been written by other users.'
            icon={<FiBookOpen />}
            title='Access to other pieces'
          />
          <br />
          <CalloutWithIcon
            color='#6faac3'
            text='Be able to link and easily view links for a piece'
            icon={<FiLink2 />}
            title='Linking Content'
          />
          <br />
          <CalloutWithIcon
            color='#6faac3'
            text='Be able to view additions and subtractions of the piece as it changes over time'
            icon={<FiGitCommit />}
            title='Version History'
          />
          <br />
          <CalloutWithIcon
            color='#6faac3'
            text='Users will be able to comment on the pieces that are published.'
            icon={<FiMessageCircle />}
            title='Commenting'
          />
          <br />
          <CalloutWithIcon
            color='#6faac3'
            text='The ability to publish to your own digital garden. You can use this for things that don’t fit the mold for the Co-x3 community digital garden. '
            icon={<FiFeather />}
            title='Publish to a Personal Garden'
          />
          <br />
          <Heading as='h3' size='md'>The Proposal that we went with</Heading>
          <br />
          <Text>We were inspired by Wordpress and the successes that it had.</Text>
          <br />
          <Text>Based off this and the user research that we had done, Joshwin came up with a proposal on how this could become a reality:</Text>
          <br />
          <Image src='/images/third-iteration-joshwin-proposal.png' alt='third iteration proposal' />
          <br />
          <Text>The idea was that there would be a central space where users would be able to make submissions to personal and collaborative digital gardens. Collaborative digital gardens would be connected to the platform but be hosted by outside parties. Every piece on the “network” would be able to reference each other.</Text>
          <br />
          <Text>External communities would be able to use the Co-x3 Digital Garden’s codebase in order to create their own collaborative digital garden and connect it to the central space.</Text>
          <br />
          <Text>We decided to move forward with this approach and Joshwin said that he would create a small demo.</Text>
          <br />
          <Heading as='h3' size='md'>The Initial Demo</Heading>
          <br />
          <Text>This is the demo that Joshwin put together. For reference, this demo made use of the Supastarter template, which is a SaaS (Software as a Service) starter template for Next.js and Supabase.</Text>
          <br />
          <Text><Text as={'span'} fontWeight='bold'>Note:</Text> The demo shows how you would submit an edit to a piece that you had already published. The demo doesn&apos;t include any audio.</Text>
          <br />
          <EmbeddedVideo
            videoId='PWeOS8-Jqh8'
          />
          <br />
          <Heading as='h3' size='md'>Recognizing the Project Leader</Heading>
          <br />
          <Text>Based on his contributions up to this point, Joshwin was recognized as the leader of this project going forward.</Text>
          <br />
          <Heading as='h3' size='md'>We need to talk about the non-profit that we are building!</Heading>
          <br />
          <Text>Based on our past discussions and where things were heading, Joshwin and Conrad decided to meet up in San Francisco in order to talk about their thoughts regarding the governance structure of Co-x3 and how it could be the future of collaborative work.</Text>
          <br />
          <Text>It was at this meeting where Joshwin brought up the name for the central space / hub and the domain:</Text>
          <br />
          <Text><Text as={'span'} fontWeight='bold'>Name of the Hub:</Text> The Digital Gardening Collective</Text>
          <br />
          <Text><Text as={'span'} fontWeight='bold'>Domain:</Text> dgc.rocks</Text>
          <br />
          <PersonalizedQuote
            name='Joshwin Greene'
            coverUrl={'/images/joshwin.png'}
            quote='I wanted to focus on the community side of the hub. I took inspiration from the old television show that was called "Codename: Kids Next Door" and initially came up with "The Digital Gardening Corp." However, in order to make it sound a little less militaristic, it made more sense to use "Collective" instead of "Corp." Additionally, the DGC has a nice ring to it.'
            color='#34aa79'
          />
          <br />
          <PersonalizedQuote
            name='Joshwin Greene'
            coverUrl={joshwin}
            quote='As for the domain…Digital Gardeners…We rock. Don’t we? 😎 💪 🤘'
            color='#34aa79'
          />
          <br />
          <Text>Here&apos;s the livestream that Conrad and Joshwin did:</Text>
          <br />
          <EmbeddedVideo
            videoId='1yOnRAkMwpc'
          />
          <br />
          <Heading as='h3' size='md'>Laying the Foundation for this Project and our Projects Going Forward</Heading>
          <br />
          <Text>Joshwin decided to explore our options when it came to the frontend for this project and our web-based projects going forward.</Text>
          <br />
          <PersonalizedQuote
            name='Joshwin Greene'
            coverUrl={joshwin}
            quote='One of my goals for the Co-x3 Digital Garden is that the public should be able use it as a template in order to create their own community digital gardens. If someone is technically minded, I would like this to ideally be free.'
            color='#34aa79'
          />
          <br />
          <Text>Based on this perspective, it no longer made sense to use the Supastarter template based on its updated pricing. However, we highly recommend it for other projects, especially those where the code is completely proprietary.</Text>
          <br />
          <PersonalizedQuote
            name='Joshwin Greene'
            coverUrl={joshwin}
            quote='I would like for our web-based projects to have a consistent tech stack so that we could all be speaking the same language. I also would like to select technologies that are sought out by employers for the aspiring software developers in the community. So, React and TypeScript are a must.'
            color='#34aa79'
          />
          <br />
          <Text>He decided to explore the use of RedwoodJS and see if it made sense for this project and for a boilerplate for our future web-based projects.</Text>
          <br />
          <Text>He mentioned the following quote that he found in a Hacker News post about RedwoodJS:</Text>
          <br />
          <Text>&quot;…I like redwood for probably the same reasons that devs raised on ruby like ruby on rails. I get to keep using all the tech i’m comfortable with but the tooling is all preconfigured and the dev experience is smooth and optimized.&quot;</Text>
          <Text>- cephalization (RedwoodJS 1.0)</Text>
          <br />
          <Text>In the end, RedwoodJS turned out to be quite the capable toolset for what we were trying to do. Plus, with our future collaborative development plans, it made sense for the eventual development pipeline that we would be creating.</Text>
          <br />
          <Text>He created a boilerplate using RedwoodJS, React, TypeScript, Supabase, Chakra UI, and a host of other technologies. This boilerplate was used for The Digital Gardening Collective and the Co-x3 Community Digital Garden.</Text>
          <br />
          <Heading as='h3' size='md'>Designing the App Icon for the Digital Gardening Collective</Heading>
          <br />
          <Text>Besides showing some type of pen and some greenery to show that notes and essays were ever-growing, we really wanted to highlight the collaborative side of this product.</Text>
          <br />
          <Text>Ashley was able to make this a reality:</Text>
          <br />
          <Image style={{ width: '250px', height: '250px', textAlign: 'center' }} src='/images/dgc_512.png' alt='DGC App Icon' />
          <br />
          <Text>This is what she had in mind when she was designing it:</Text>
          <br />
          <PersonalizedQuote
            name='Ashley Crouch'
            coverUrl={ashley}
            quote="I really wanted to show the collaborative nature of the digital gardening collective, as well as, of course, the aspect of it being a garden that is ever-changing and ever-growing due to its individual contributors. It was also important to show that this is not a heavily curated space, unlike most other parts of the internet. I wanted to give a more sketchy feel to the icon to show that this is a place where you can bring those partial thoughts in to grow bigger later, either with the help of others or just from the individual's growth. I also really liked the idea of roots and branches of the plant going in all directions, like the variety of topics and ideas that each individual is pursuing in their own lives. Each of the feather pen 'leaves' are drawing the branches, expanding the knowledge tree individually, like we hope our users will do on this platform."
            color='#e03d3e'
          />
          <br />
          <Heading as='h1' size='xl'>Launching the Invite-only Early Access Version</Heading>
          <br />
          <Text>The Invite-only Early Access Version of The Digital Gardening Collective and the Co-x3 Community Digital Garden was officially launched on Tuesday, May 2nd.</Text>
          <br />
          <Text>On that same day, Joshwin gave a demo of both apps at the Annual <Link style={{ fontWeight: 'bold', textDecoration: 'underline' }} href='https://www.linkingyourthinking.com/lytcon-3' isExternal>Linking Your Thinking Conference</Link>, which was running from May 1st to May 5th.</Text>
          <br />
          <Text><Text as={'span'} fontWeight='bold'>Note:</Text> The intro for the demo begins at 26:19.</Text>
          <br />
          <EmbeddedVideo
            videoId='LowOdmZLF1E?t=1578'
          />
          <br />
          <Heading as='h3' size='md'>What&apos;s Next</Heading>
          <br />
          <Text>In the meantime, we suggest that you sign up to the early access waitlist. We will be giving people access in waves.</Text>
          <br />
          <Heading as='h3' size='md'>Getting to the Public Early Access Version</Heading>
          <br />
          <Text>The development team has been set. We should be done with the public early access version in three months. Now, we will be building this in public (#buildinpublic). What does this mean? Our goal will be to post an update every two weeks on social media and in our community on Sunday. If we have any extra updates, you may get an early update.</Text>
          <br />
          <Heading as='h3' size='md'>A word about sustainability</Heading>
          <br />
          <Text>Since it is so important, here’s our message on the Digital Gardening Collective’s landing page about sustainability:</Text>
          <br />
          <Text>&quot;The Digital Gardening Collective and the Co-x3 Community Digital Garden will be supported through the use of ads and sponsorships. More specifically, ads won&apos;t be shown on published pieces unless individual authors give us permission to do so. Other locations within both apps and in our newsletters will be fair game. However, our goal is to always ensure that the user experience takes absolute priority.&quot;</Text>
          <br />
          <Text>We don’t want to annoy our users with annual requests for donations. So, we believe ads and sponsorships are the answer.</Text>
          <br />
          <Text>In the end, we want the digital gardening community to be a big part of this initiative. As stated on the landing page for the Digital Gardening Collective, this initiative is being…</Text>
          <br />
          <Text>~ Developed for the Community; Developed by the Community ~</Text>
          <br />
          <Text>We hope you will join us.</Text>
          <br />
          <Container maxW={'5xl'} mb={10} style={{ border: '2px solid gray', borderRadius: '10px' }}>
            <Stack
              textAlign={'center'}
              align={'center'}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 10, md: 14 }}>
              <Heading
                fontWeight={600}
                fontSize={'4xl'}
                lineHeight={'110%'}>
                Join the Revolution!
              </Heading>
              <a href="https://www.producthunt.com/upcoming/the-digital-gardening-collective"
                  target={'_blank'}
                  style={{ backgroundColor: '#ff6254', color: 'white', padding: '5px 10px 5px 10px', borderRadius: '30px' }}>Subscribe on Product Hunt
              </a>
              <Text
                fontSize={'xl'}
                lineHeight={'110%'}>
                The Digital Gardening Collective is in invite-only early access.
              </Text>
            </Stack>
            </Container>
            </Flex>
          </Container>
    </>
  )
}

Landing.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Landing;
