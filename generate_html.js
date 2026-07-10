const fs = require('fs');
const path = require('path');

async function buildHtml() {
    const stickyColors = ['#fef08a', '#bbf7d0', '#bfdbfe', '#fbcfe8']; 

    let allSlides = [];
    function addSlide(title, htmlContent, presenterClass, bgColor, isChalk = false) {
        allSlides.push({
            id: 'slide-' + Math.random().toString(36).substr(2, 9),
            title: title,
            content: htmlContent,
            presenterClass: presenterClass,
            bgColor: bgColor,
            isChalk: isChalk
        });
    }

    addSlide('Ice Breaker', `<div class="title-slide"><h2>Ice Breaker / Motivation</h2></div>`, 'presenter-0', stickyColors[3]);

    addSlide('Ice Breaker', `<div class="content-slide">
        <div class="focus-group">
            <h2 style="font-family:'Kalam', cursive; color:#1e3a8a; font-size:2rem; margin-bottom:1rem;">Ice Breaker 1: The Multi-Role</h2>
            <p style="font-size: 1.5rem; line-height: 1.6; margin-bottom: 1rem;"><strong>Teaser:</strong> "I am the person in the room who has to be a manager, a leader, a parent, a counselor, and a teacher all at the same time. Who am I, and can you name one task I do for each role?"</p>
            <div class="answer-block">
                <p><strong>Answer:</strong> The Teacher.</p>
                <p><strong>Teaching Focus:</strong> This engages students in discussing the varied roles of the teacher, which is a core component of the teaching-learning process.</p>
            </div>
        </div>
    </div>`, 'presenter-0', stickyColors[0]);

    addSlide('Ice Breaker', `<div class="content-slide">
        <div class="focus-group">
            <h2 style="font-family:'Kalam', cursive; color:#1e3a8a; font-size:2rem; margin-bottom:1rem;">Ice Breaker 2: The "Hidden Learner" Challenge</h2>
            <p style="font-size: 1.5rem; line-height: 1.6; margin-bottom: 1rem;"><strong>Teaser:</strong> "Look at these four words: TEACHER, LEARNER, ENVIRONMENT, SCHOOL. Count how many total letters there are across all four words combined. You have 10 seconds!"</p>
            <div class="answer-block">
                <p><strong>Answer:</strong> 30 letters.</p>
                <p><strong>Teaching Focus:</strong> This builds anticipation for the three main elements of the teaching-learning process (Teacher, Learner, Environment) while getting students to focus intently on the screen.</p>
            </div>
        </div>
    </div>`, 'presenter-0', stickyColors[1]);

    addSlide('Ice Breaker', `<div class="content-slide">
        <div class="focus-group">
            <h2 style="font-family:'Kalam', cursive; color:#1e3a8a; font-size:2rem; margin-bottom:1rem;">Ice Breaker 3: Word Scramble</h2>
            <p style="font-size: 1.5rem; line-height: 1.6; margin-bottom: 1rem;"><strong>Teaser:</strong> "I am the type of intelligence that helps you find the 'right words' to express exactly what you mean. I am called '____ Smart.' Unscramble these letters to find me: I-L-U-N-G-I-S-T-I-C."</p>
            <div class="answer-block">
                <p><strong>Answer:</strong> Linguistic.</p>
                <p><strong>Teaching Focus:</strong> This is a fun introduction to Multiple Intelligences, specifically getting students to think about their own strengths before you dive into the theory.</p>
            </div>
        </div>
    </div>`, 'presenter-0', stickyColors[2]);

    addSlide('Motivation', `<div class="content-slide" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
        <div class="focus-group" style="text-align: center;">
            <h2 style="font-family:'Kalam', cursive; color:#1e3a8a; font-size:3.5rem; margin-bottom:2rem;">Motivation</h2>
            <h3 style="font-family:'Kalam', cursive; color:#374151; font-size:2.2rem; margin-bottom:1rem;">Philippians 4:13</h3>
            <p style="font-size: 2rem; line-height: 1.6; font-style: italic;">"I can do all things through Christ who strengthens me."</p>
        </div>
    </div>`, 'presenter-0', stickyColors[1]);

    addSlide('Recap', `<div class="title-slide"><h2>Recap of Previous Lesson</h2></div>`, 'presenter-0', stickyColors[3]);

    addSlide('Objectives', `<div class="title-slide"><h2>Objectives of the Lesson</h2></div>`, 'presenter-0', '#fdfdfd');
    addSlide('Objectives', `<div class="content-slide"><div class="doc-content focus-group"><h2 style="font-family:'Kalam', cursive; color:#1e3a8a; font-size:2rem; margin-bottom:1rem;">Objectives</h2><ul><li><strong>Understand</strong> the core elements of the teaching-learning process.</li><li><strong>Identify</strong> the various roles of a teacher in a classroom.</li><li><strong>Explore</strong> different learning styles and multiple intelligences.</li><li><strong>Apply</strong> Thorndike's Laws of Learning and other learning theories.</li></ul></div></div>`, 'presenter-0', stickyColors[0]);

    
    addSlide('The Teaching-Learning Process', `<div class="title-slide"><h2>The Teaching-Learning Process</h2></div>`, 'presenter-1', '#fdfdfd');
    addSlide('The Teaching-Learning Process', `<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.5rem; line-height: 1.8; margin-top: 1rem;">
            <li class="focus-group" style="margin-bottom: 1.5rem;"><strong>Teaching & Learning:</strong> The transfer of knowledge from giver to receiver. Fails if any element is missing.</li>
            <li class="focus-group" style="margin-bottom: 1.5rem;"><strong>The Teacher:</strong> The prime mover. Directs the flow, facilitates, and controls the process.</li>
            <li class="focus-group" style="margin-bottom: 1.5rem;"><strong>The Learner:</strong> The key participant and primary subject. Their acquired knowledge determines if objectives are met.</li>
            <li class="focus-group" style="margin-bottom: 1.5rem;"><strong>The Environment:</strong> A favorable setting that removes communication barriers and facilitates smooth teaching.
            <br><img src="images/img_1.png" style="max-width: 100%; max-height: 200px; border-radius: 8px; margin-top: 10px;"></li>
        </ul>
    </div></div>`, 'presenter-1', stickyColors[1]);

    addSlide('Roles of the Teacher', `<div class="title-slide"><h2>Roles of the Teacher</h2></div>`, 'presenter-2', '#fdfdfd');
    addSlide('Roles of the Teacher', `<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.5rem; line-height: 1.8; margin-top: 1.5rem;">
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Manager:</strong> Maintains systematic classroom order.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Leader:</strong> Acts as a director, coach, and supporter.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Surrogate Parent:</strong> Provides security and emotional well-being.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Counselor:</strong> Offers guidance for personal challenges.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Model:</strong> Serves as an exemplar for behavior and judgment.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Public Relations Specialist:</strong> Manages external stakeholders.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Facilitator & Instructor:</strong> Guides core instruction.</li>
        </ul>
    </div></div>`, 'presenter-2', stickyColors[2]);

    addSlide('Visual Learning Style', `<div class="title-slide"><h2>Visual Learning Style</h2></div>`, 'presenter-3', '#fdfdfd');
    addSlide('Visual Learning Style', `<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.8rem; line-height: 2; margin-top: 2rem;">
            <li class="focus-group" style="margin-bottom: 1.5rem;">Learns by seeing (pictures, charts, diagrams).</li>
            <li class="focus-group" style="margin-bottom: 1.5rem;">Fast talkers, easily visualize ideas.</li>
        </ul>
    </div></div>`, 'presenter-3', stickyColors[3]);

    addSlide('Aural Learning Style', `<div class="title-slide"><h2>Aural Learning Style</h2></div>`, 'presenter-3', '#fdfdfd');
    addSlide('Aural Learning Style', `<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.8rem; line-height: 2; margin-top: 2rem;">
            <li class="focus-group" style="margin-bottom: 1.5rem;">Learns by hearing (lectures, discussions).</li>
            <li class="focus-group" style="margin-bottom: 1.5rem;">Natural listeners, slow speakers.</li>
        </ul>
    </div></div>`, 'presenter-3', stickyColors[0]);

    addSlide('Read/Write Learning Style', `<div class="title-slide"><h2>Read/Write Learning Style</h2></div>`, 'presenter-3', '#fdfdfd');
    addSlide('Read/Write Learning Style', `<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.8rem; line-height: 2; margin-top: 2rem;">
            <li class="focus-group" style="margin-bottom: 1.5rem;">Prefers written text.</li>
            <li class="focus-group" style="margin-bottom: 1.5rem;">Enjoys reading and writing extensively.</li>
        </ul>
    </div></div>`, 'presenter-3', stickyColors[1]);

    addSlide('Kinesthetic Learning Style', `<div class="title-slide"><h2>Kinesthetic Learning Style</h2></div>`, 'presenter-3', '#fdfdfd');
    addSlide('Kinesthetic Learning Style', `<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.8rem; line-height: 2; margin-top: 2rem;">
            <li class="focus-group" style="margin-bottom: 1.5rem;">Learns through hands-on approaches (trial and error).</li>
            <li class="focus-group" style="margin-bottom: 1.5rem;">Uses all senses to engage in learning.</li>
        </ul>
    </div></div>`, 'presenter-3', stickyColors[2]);

    addSlide('Multiple Intelligences Part 1', `<div class="title-slide"><h2>Multiple Intelligences Part 1</h2></div>`, 'presenter-4', '#fdfdfd');
    addSlide('Multiple Intelligences Part 1', `<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.6rem; line-height: 1.8; margin-top: 2rem;">
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Spatial (Picture Smart):</strong> Thinks in images.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Musical (Music Smart):</strong> Affinity for rhythm and sound.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Linguistic (Word Smart):</strong> Has a way with words.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Bodily-Kinesthetic (Body Smart):</strong> Good body control, works with hands.</li>
        </ul>
    </div></div>`, 'presenter-4', stickyColors[3]);

    addSlide('Multiple Intelligences Part 2', `<div class="title-slide"><h2>Multiple Intelligences Part 2</h2></div>`, 'presenter-4', '#fdfdfd');
    addSlide('Multiple Intelligences Part 2', `<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.6rem; line-height: 1.8; margin-top: 2rem;">
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Logical-Mathematical (Number Smart):</strong> Excels at science and math.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Interpersonal (People Smart):</strong> Thrives around others.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Intrapersonal (Self-Smart):</strong> Introspective and independent.</li>
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Natural (Nature Smart):</strong> Understands patterns in nature.</li>
        </ul>
    </div></div>`, 'presenter-4', stickyColors[0]);

    addSlide("Thorndike's Laws of Learning", `<div class="title-slide"><h2>Thorndike's Laws of Learning</h2></div>`, 'presenter-5', '#fdfdfd');
    addSlide("Thorndike's Laws of Learning", `<div class="content-slide"><div class="doc-content" style="display:flex; flex-direction:column; gap:10px;">
        <div class="focus-group" style="display:flex; align-items:center; gap: 15px;">
            <img src="images/img_2.jpeg" style="width: 120px; border-radius: 8px;">
            <p style="font-size: 1.3rem;"><strong>Law of Readiness:</strong> Learning starts with a prepared mindset; forced learning fails.</p>
        </div>
        <div class="focus-group" style="display:flex; align-items:center; gap: 15px;">
            <img src="images/img_3.jpeg" style="width: 120px; border-radius: 8px;">
            <p style="font-size: 1.3rem;"><strong>Law of Exercise:</strong> Repetition strengthens brain connections; lack of use causes rust.</p>
        </div>
        <div class="focus-group" style="display:flex; align-items:center; gap: 15px;">
            <img src="images/img_4.jpeg" style="width: 120px; border-radius: 8px;">
            <p style="font-size: 1.3rem;"><strong>Law of Effect:</strong> We repeat actions that lead to rewards and avoid those that lead to failure.</p>
        </div>
        <ul style="font-size: 1.3rem; margin-top: 0.5rem; margin-left: 1.5rem;">
            <li class="focus-group" style="margin-bottom: 0.5rem;"><strong>Law of Belongingness:</strong> Learning is faster and stronger when the learner perceives a natural connection between stimuli involved.</li>
            <li class="focus-group" style="margin-bottom: 0.5rem;"><strong>Law of Intensity:</strong> An experience that is vivid, dramatic, or striking is learned and remembered more deeply than an ordinary one.</li>
            <li class="focus-group" style="margin-bottom: 0.5rem;"><strong>Law of Forgetting:</strong> Skills and knowledge that are not used or reviewed over time gradually fade from memory.</li>
        </ul>
    </div></div>`, 'presenter-5', stickyColors[1]);

    addSlide('Other Learning Theories Part 1', `<div class="title-slide"><h2>Other Learning Theories Part 1</h2></div>`, 'presenter-6', '#fdfdfd');
    addSlide('Other Learning Theories Part 1', `<div class="content-slide"><div class="doc-content">
        <div class="focus-group" style="display:flex; align-items:center; gap: 15px; margin-bottom: 1rem;">
            <img src="images/img_5.jpeg" style="width: 100px; border-radius: 8px;">
            <p style="font-size: 1.3rem;"><strong>Operant Conditioning:</strong> Learning through rewards and consequences.</p>
        </div>
        <div class="focus-group" style="display:flex; align-items:center; gap: 15px; margin-bottom: 1rem;">
            <img src="images/img_6.jpeg" style="width: 100px; border-radius: 8px;">
            <p style="font-size: 1.3rem;"><strong>Cognitive Perspective:</strong> Learning is an internal mental activity. Mind works like a computer.</p>
        </div>
        <div class="focus-group" style="display:flex; align-items:center; gap: 15px; margin-bottom: 1rem;">
            <img src="images/img_7.jpeg" style="width: 100px; border-radius: 8px;">
            <p style="font-size: 1.3rem;"><strong>Gestalt Theory:</strong> People perceive objects as complete wholes.</p>
        </div>
    </div></div>`, 'presenter-6', stickyColors[2]);

    addSlide('Other Learning Theories Part 2', `<div class="title-slide"><h2>Other Learning Theories Part 2</h2></div>`, 'presenter-6', '#fdfdfd');
    addSlide('Other Learning Theories Part 2', `<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.4rem; line-height: 1.8; margin-top: 1.5rem;">
            <li class="focus-group" style="margin-bottom: 1rem;"><strong>Field Theory (Kurt Lewin):</strong> Behavior = Person + Environment. A positive environment improves performance.</li>
        </ul>
        <div class="focus-group" style="display:flex; align-items:center; gap: 15px; margin-top: 1.5rem;">
            <img src="images/img_8.png" style="width: 120px; border-radius: 8px;">
            <p style="font-size: 1.3rem;"><strong>Intelligence Theories:</strong><br><em>Alfred Binet:</em> Intelligence is reasoning, can improve.<br><em>Charles Spearman:</em> Proposed "g-factor" and "s-factor".</p>
        </div>
    </div></div>`, 'presenter-6', stickyColors[3]);
    // --- ASSESSMENT SLIDES (CHALK DUST MECHANIC) ---
    const assessmentQuestions = [
        { q: "The systematic interaction among the teacher, learner, and environment.", a: "Teaching-Learning Process" },
        { q: "A learning style in which students learn best through physical activities.", a: "Kinesthetic Learning Style" },
        { q: "The law stating that learning is strengthened through rewards.", a: "Law of Effect" },
        { q: "The theory stating that behavior is influenced by both the individual and the environment.", a: "Field Theory" },
        { q: "The theory explaining that people naturally perceive objects as complete wholes.", a: "Gestalt Theory" }
    ];

    addSlide('Assessment', `<div class="title-slide chalk-board-quiz"><h2 style="color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Assessment</h2><p style="color: rgba(255,255,255,0.8); font-size: 1.5rem; font-family: 'Kalam', cursive;">Let's review what we've learned!</p></div>`, 'presenter-0', 'transparent', true);

    assessmentQuestions.forEach((item, index) => {
        addSlide('Assessment', `<div class="content-slide chalk-board-quiz" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
            <h2 style="color: white; font-family: 'Kalam', cursive; font-size: 2.5rem; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Question ${index + 1}</h2>
            <p style="color: white; font-size: 2rem; line-height: 1.5; margin-bottom: 3rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); text-align: center;">${item.q}</p>
            <div class="chalk-answer-container" style="position: relative; display: inline-block; border: 2px dashed rgba(255,255,255,0.2); border-radius: 10px; padding: 10px;">
                <p class="actual-answer" style="color: #6ee7b7; font-family: 'Kalam', cursive; font-size: 3rem; margin: 0; padding: 20px; text-shadow: 0 0 10px rgba(0,0,0,0.8);">${item.a}</p>
                <canvas class="dust-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: crosshair; touch-action: none; border-radius: 10px;"></canvas>
            </div>
        </div>`, 'presenter-0', 'transparent', true);
    });

    addSlide('Bible Verse', `<div class="content-slide" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
        <div class="focus-group" style="text-align: center;">
            <h2 style="font-family:'Kalam', cursive; color:#1e3a8a; font-size:3rem; margin-bottom:1.5rem;">Proverbs 1:5</h2>
            <p style="font-size: 2.2rem; line-height: 1.6; font-style: italic;">"Let the wise listen and add to their learning, and let the discerning get guidance."</p>
        </div>
    </div>`, 'presenter-0', stickyColors[0]);

    // -------------------------------------------------------------
    // KNOWLEDGE MAP (CLUSTERS & STACKING)
    // -------------------------------------------------------------
    const clusters = [];
    let currentCluster = null;
    allSlides.forEach(s => {
        if (!currentCluster || currentCluster.title !== s.title) {
            currentCluster = { title: s.title, slides: [] };
            clusters.push(currentCluster);
        }
        currentCluster.slides.push(s);
    });

    const NUM_CLUSTERS = clusters.length;
    clusters.forEach((cluster, i) => {
        cluster.cx = i * 3500;
        cluster.cy = (i % 2 === 0) ? -500 : 500;
    });
    let svgPaths = '';
    for (let i = 0; i < clusters.length - 1; i++) {
        const c1 = clusters[i];
        const c2 = clusters[i+1];
        svgPaths += `<path d="M ${c1.cx + 5000} ${c1.cy + 5000} L ${c2.cx + 5000} ${c2.cy + 5000}" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="12" stroke-dasharray="25, 15" filter="url(#chalk)"/>\n`;
    }

    allSlides.forEach(s => {
        const cluster = clusters.find(c => c.title === s.title);
        const idx = cluster.slides.indexOf(s);
        
        if (cluster.title === 'Ice Breaker') {
            const stackOffsetX = 120;
            const stackOffsetY = 80;
            s.x = cluster.cx + (idx * stackOffsetX);
            s.y = cluster.cy + (idx * stackOffsetY);
        } else {
            const localCols = 3;
            const row = Math.floor(idx / localCols);
            const col = idx % localCols;
            s.x = cluster.cx + (col * 900) - (Math.min(cluster.slides.length, localCols) - 1) * 450;
            s.y = cluster.cy + (row * 750);
        }
        
        s.z = cluster.title === 'Ice Breaker' ? 100 - idx : idx + 10;
        s.rot = (Math.random() * 4) - 2; 
        s.clusterTitle = cluster.title;
        s.indexInCluster = idx;
    });

    const doodleChars = ['✿', '★', '✏️', '♡', '♪', 'A+', '☼', '✨', '📖', '❀', '♫', '✓'];
    const chalkColors = ['rgba(255,255,255,0.4)', 'rgba(255,180,180,0.5)', 'rgba(180,255,180,0.5)', 'rgba(180,180,255,0.5)', 'rgba(255,255,180,0.5)'];
    let doodlesHtml = '';
    for(let i=0; i<150; i++) {
        const char = doodleChars[Math.floor(Math.random() * doodleChars.length)];
        const color = chalkColors[Math.floor(Math.random() * chalkColors.length)];
        const x = (Math.random() * 30000) - 5000;
        const y = (Math.random() * 10000) - 5000;
        const rot = Math.random() * 360;
        const size = Math.random() * 5 + 4;
        doodlesHtml += `<div class="doodle" style="color: ${color}; transform: translate(${x}px, ${y}px) rotate(${rot}deg); font-size: ${size}rem;">${char}</div>\n`;
    }

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>Demo Teaching Presentation</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Kalam:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root { --bg-color: #162b20; --text-main: #333; }
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            background-color: var(--bg-color);
            background-image: 
                linear-gradient(rgba(255,255,255,0.18) 2px, transparent 2px),
                linear-gradient(90deg, rgba(255,255,255,0.12) 2px, transparent 2px);
            background-size: 150px 150px;
            font-family: 'Inter', sans-serif;
            color: var(--text-main);
            overflow: hidden;
            width: 100vw; height: 100dvh;
            overscroll-behavior: none;
            touch-action: none;
        }

        .focus-board, .focus-layout { touch-action: auto; }

        body::before {
            content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.05"/></svg>');
            pointer-events: none; z-index: 0;
        }

        #titleOverlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100dvh;
            background: rgba(22, 43, 32, 0.95);
            backdrop-filter: blur(10px);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            z-index: 1000; cursor: pointer;
            transition: transform 1.2s cubic-bezier(0.65, 0, 0.15, 1), opacity 0.8s ease, visibility 1s;
            text-align: center; transform-origin: center center;
        }
        #titleOverlay.hidden { transform: scale(3.5); opacity: 0; visibility: hidden; pointer-events: none; }
        #titleOverlay h1 { font-size: 5.5rem; font-weight: 800; color: #f8fafc; margin-bottom: 1rem; font-family: 'Kalam', cursive; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
        #titleOverlay h2 { font-size: 3rem; color: #cbd5e1; font-family: 'Kalam', cursive; }

        #viewport { position: absolute; top: 0; left: 0; width: 100vw; height: 100dvh; perspective: 2000px; z-index: 10; }
        #canvas { position: absolute; top: 50%; left: 50%; transition: transform 1.2s cubic-bezier(0.65, 0, 0.15, 1); transform-style: preserve-3d; }
        
        .doodle { position: absolute; font-family: 'Kalam', cursive; pointer-events: none; z-index: -10; text-shadow: 1px 1px 3px rgba(0,0,0,0.3); }

        .card {
            position: absolute; width: 800px; max-height: 650px; border-radius: 2px;
            box-shadow: -15px 25px 40px rgba(0,0,0,0.5), inset 0 0 10px rgba(0,0,0,0.05);
            padding: 50px 60px; overflow-y: auto; cursor: pointer;
            background-image: repeating-linear-gradient(transparent, transparent 31px, rgba(0,0,0,0.05) 31px, rgba(0,0,0,0.05) 32px);
            background-attachment: local; background-position: 0 30px;
            transform: translate(calc(-50% + var(--cx)), calc(-50% + var(--cy))) rotate(var(--rot));
            transition: box-shadow 0.3s, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), filter 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .card.chalk-card {
            background-image: none !important;
            background-color: rgba(0, 0, 0, 0.6) !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5) !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
            border-radius: 12px !important;
            backdrop-filter: blur(8px);
            cursor: default;
        }
        .card.chalk-card:hover {
            box-shadow: none !important;
        }
        .card.chalk-card.active {
            box-shadow: none !important;
        }
        
        .card.unrevealed {
            filter: blur(15px) grayscale(80%);
            opacity: 0.15;
            pointer-events: none;
            transform: translate(calc(-50% + var(--cx)), calc(-50% + var(--cy) - 20px)) rotate(var(--rot)) scale(0.95);
        }

        .card.peeled {
            transform: translate(calc(-50% + var(--cx) - 400px), calc(-50% + var(--cy) - 200px)) rotate(calc(var(--rot) - 25deg));
            opacity: 0;
            pointer-events: none;
        }
        
        .card:hover { box-shadow: -20px 35px 50px rgba(0,0,0,0.6); }
        .card.active { box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 0 5px rgba(255,255,255,0.8); cursor: default; }

        .tape {
            position: absolute; top: -10px; left: 50%; transform: translateX(-50%) rotate(-2deg);
            width: 140px; height: 38px; background: rgba(245, 240, 230, 0.95);
            box-shadow: 1px 2px 5px rgba(0,0,0,0.4); z-index: 5;
            border-left: 3px dashed rgba(200,200,200,0.9); border-right: 3px dashed rgba(200,200,200,0.9); border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .title-slide { text-align: center; display: flex; flex-direction: column; justify-content: center; height: 100%; min-height: 400px; }
        .title-slide h2 { font-size: 3.5rem; color: #111827; font-family: 'Kalam', cursive; transform-origin: center center; }
        .doc-content { font-size: 1.3rem; line-height: 1.7; color: #374151; }
        .focus-group {
            transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); padding: 12px 16px; border-radius: 8px; margin-bottom: 1rem; transform-origin: left center; cursor: pointer;
        }
        .focus-group:hover {
            transform: scale(1.05) translateZ(10px); background: rgba(255,255,255,0.7); box-shadow: 0 10px 20px rgba(0,0,0,0.1); color: #000; z-index: 10; position: relative;
        }
        .doc-content img { max-width: 100%; height: auto; max-height: 350px; display: block; margin: 1.5rem auto; border-radius: 4px; box-shadow: 0 8px 20px rgba(0,0,0,0.2); transition: transform 0.5s; cursor: pointer; }
        .card::-webkit-scrollbar { width: 8px; }
        .card::-webkit-scrollbar-track { background: transparent; }
        .card::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 4px; }

        /* Blurred Answer Block */
        .answer-block {
            margin-top: 1.5rem; padding-top: 1.2rem; border-top: 2px dashed rgba(0,0,0,0.15);
        }
        .card .answer-block {
            filter: blur(8px); opacity: 0.4; transition: all 0.5s ease; user-select: none;
        }
        .card .answer-block:hover {
            filter: blur(5px); opacity: 0.6;
        }
        #focusModal .answer-block {
            filter: blur(0px); opacity: 1; user-select: auto;
        }

        #focusModal { position: fixed; top: 0; left: 0; width: 100vw; height: 100dvh; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(15px); display: flex; align-items: center; justify-content: center; z-index: 2000; opacity: 0; visibility: hidden; transition: all 0.4s ease; cursor: pointer; }
        #focusModal.visible { opacity: 1; visibility: visible; }
        .focus-board { width: 800px; max-width: 90vw; max-height: 90vh; display: flex; flex-direction: column; background: #fff; padding: 50px 60px 40px; border-radius: 4px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); position: relative; transform: scale(0.8) translateY(50px); transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); background-image: repeating-linear-gradient(transparent, transparent 31px, rgba(0,0,0,0.05) 31px, rgba(0,0,0,0.05) 32px); background-position: 0 30px; cursor: default; }
        #focusModal.visible .focus-board { transform: scale(1) translateY(0); }
        .focus-board .tape { top: -15px; width: 150px; height: 40px; z-index: 100; }
        .focus-board h1, .focus-board h2, .focus-board h3, .focus-board h4 { font-size: 2.8rem; color: #1e3a8a; margin-bottom: 1.5rem; font-family: 'Kalam', cursive; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; flex-shrink: 0; }
        .focus-content { font-size: 1.8rem; line-height: 1.8; color: #111827; overflow-y: auto; flex: 1; padding-right: 15px; }
        .focus-content p, .focus-content li { margin-bottom: 1.5rem; }
        .focus-content img { max-width: 50%; height: auto; object-fit: contain; float: right; margin: 0 0 1rem 1.5rem; border-radius: 4px; box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        .focus-image-frame img { max-width: 100%; max-height: 80vh; object-fit: contain; border-radius: 4px; box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        .controls { position: fixed; bottom: calc(30px + env(safe-area-inset-bottom)); left: 50%; transform: translateX(-50%); display: flex; gap: 15px; z-index: 200; opacity: 0; visibility: hidden; transition: opacity 0.5s; }
        .controls.visible { opacity: 1; visibility: visible; }
        .nav-btn { background: #ffffff; color: #374151; border: 1px solid #d1d5db; padding: 12px 25px; border-radius: 30px; font-weight: 700; font-size: 1rem; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: all 0.2s; }
        .nav-btn:hover:not(:disabled) { background: #f3f4f6; transform: translateY(-2px); box-shadow: 0 6px 15px rgba(0,0,0,0.15); }
        .nav-btn.overview-btn { background: #162b20; color: white; border: 1px solid rgba(255,255,255,0.3); }
        .nav-btn.overview-btn:hover { background: #264b38; }
        .top-bar { position: fixed; top: 30px; left: 40px; background: rgba(255,255,255,0.95); padding: 10px 20px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); font-weight: 600; color: #162b20; z-index: 200; display: flex; align-items: center; gap: 10px; opacity: 0; transition: opacity 0.5s; }
        .top-bar.visible { opacity: 1; }
        .topic-dot { width: 10px; height: 10px; background: #eab308; border-radius: 50%; }

        /* ====== MOBILE RESPONSIVE ====== */
        @media (max-width: 768px) {
            #titleOverlay h1 { font-size: 2.5rem; }
            #titleOverlay h2 { font-size: 1.5rem; }

            .top-bar { top: 10px; left: 10px; padding: 6px 14px; font-size: 0.8rem; border-radius: 14px; }
            .controls {
                bottom: calc(15px + env(safe-area-inset-bottom)); gap: 10px;
                flex-direction: column; align-items: center;
            }
            .nav-btn { padding: 10px 30px; font-size: 0.9rem; width: 160px; text-align: center; }

            .focus-board {
                width: 95vw !important; max-width: 95vw !important; min-width: unset !important;
                padding: 25px 20px 20px !important;
                max-height: 85vh !important;
            }
            .focus-board h1, .focus-board h2, .focus-board h3, .focus-board h4 {
                font-size: 1.6rem !important; margin-bottom: 0.8rem;
            }
            .focus-content {
                font-size: 1.1rem !important; line-height: 1.6 !important;
                padding-right: 5px !important;
            }
            .focus-content p, .focus-content li { margin-bottom: 0.8rem !important; }
            .focus-content img {
                max-width: 100% !important; float: none !important;
                margin: 1rem 0 !important;
            }

            /* Split layout stacks vertically on mobile */
            .focus-layout {
                flex-direction: column !important;
                gap: 15px !important;
                max-height: 90vh !important;
                overflow-y: auto !important;
            }
            .focus-layout .focus-board {
                min-width: unset !important; max-width: 95vw !important;
            }
            .focus-image-frame {
                max-width: 95vw !important;
                max-height: 40vh !important;
            }
            .focus-image-frame img {
                max-height: 35vh !important;
            }

            .tape { width: 80px; height: 22px; top: -6px; }
            .focus-board .tape { width: 100px; height: 28px; top: -10px; }
        }
    </style>
</head>
<body class="overview-state">

    <div id="titleOverlay" onclick="startPresentation()">
        <h1>Teaching and Learning Process</h1>
        <h2>Group 2</h2>
    </div>

    <div class="top-bar" id="topBar">
        <div class="topic-dot"></div>
        <span id="currentTopic">Overview</span>
    </div>

    <div id="viewport">
        <div id="canvas">
            <svg style="position: absolute; top: -5000px; left: -5000px; width: 40000px; height: 10000px; overflow: visible; z-index: -5;">
                <defs>
                    <filter id="chalk" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G"/>
                    </filter>
                </defs>
                ${svgPaths}
            </svg>
            ${doodlesHtml}
            ${allSlides.map((s, i) => `
            <div class="card ${s.presenterClass} ${s.isChalk ? 'chalk-card' : ''} unrevealed" 
                 id="${s.id}" 
                 style="--cx: ${s.x}px; --cy: ${s.y}px; --rot: ${s.rot}deg; z-index: ${s.z}; background-color: ${s.bgColor};"
                 onclick="zoomToSlide(${i})">
                ${!s.isChalk ? '<div class="tape"></div>' : ''}
                ${s.content}
            </div>`).join('\n            ')}
        </div>
    </div>

    <div id="focusModal"></div>

    <div class="controls" id="controlsBox">
        <button class="nav-btn" id="prevBtn" onclick="navigate(-1)">&larr; Prev</button>
        <button class="nav-btn overview-btn" onclick="showOverview()">Knowledge Map</button>
        <button class="nav-btn" id="nextBtn" onclick="navigate(1)">Next &rarr;</button>
    </div>

    <script>
        const canvas = document.getElementById('canvas');
        const cards = document.querySelectorAll('.card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const currentTopicLabel = document.getElementById('currentTopic');
        const controlsBox = document.getElementById('controlsBox');
        const topBar = document.getElementById('topBar');
        const focusModal = document.getElementById('focusModal');
        
        const slidesData = ${JSON.stringify(allSlides.map(s => ({ id: s.id, x: s.x, y: s.y, title: s.title, clusterTitle: s.clusterTitle, indexInCluster: s.indexInCluster })))};
        
        let state = 'TITLE'; // TITLE, OVERVIEW, SLIDE
        let currentIndex = -1;
        let visitedClusters = new Set();
        let overviewScale = 1;
        let panX = 0;
        let panY = 0;

        function startPresentation() {
            if (state !== 'TITLE') return;
            document.getElementById('titleOverlay').classList.add('hidden');
            controlsBox.classList.add('visible');
            topBar.classList.add('visible');
            showOverview();
        }

        function showOverview() {
            state = 'OVERVIEW';
            document.body.classList.add('overview-state');
            
            let maxX = -Infinity, maxY = -Infinity, minX = Infinity, minY = Infinity;
            slidesData.forEach(s => {
                if (s.x > maxX) maxX = s.x; if (s.y > maxY) maxY = s.y;
                if (s.x < minX) minX = s.x; if (s.y < minY) minY = s.y;
            });
            
            // On mobile, allow the overview to be larger so it's readable. Users can pan around.
            overviewScale = window.innerWidth < 768 ? Math.min(window.innerWidth / 1500, window.innerHeight / 2000) : Math.min(window.innerWidth / 4000, window.innerHeight / 2000);
            panX = 0;
            panY = 0;
            canvas.style.transform = \`scale(\${overviewScale}) translate(0px, 0px)\`;
            currentTopicLabel.innerText = 'Overview';
            
            if (visitedClusters.size === 0 && slidesData.length > 0) {
                visitedClusters.add(slidesData[0].clusterTitle);
            }
            
            cards.forEach((c, i) => {
                c.classList.remove('active');
                c.classList.remove('peeled');
                if (visitedClusters.has(slidesData[i].clusterTitle)) {
                    c.classList.remove('unrevealed');
                } else {
                    c.classList.add('unrevealed');
                }
            });
            
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }

        // Panning logic for overview
        let isPanning = false;
        let lastX, lastY;
        const viewport = document.getElementById('viewport');
        viewport.addEventListener('pointerdown', (e) => { if (state === 'OVERVIEW') { isPanning = true; lastX = e.clientX; lastY = e.clientY; viewport.style.cursor = 'grabbing'; } });
        window.addEventListener('pointermove', (e) => {
            if (!isPanning || state !== 'OVERVIEW') return;
            panX += (e.clientX - lastX) / overviewScale;
            panY += (e.clientY - lastY) / overviewScale;
            canvas.style.transform = \`scale(\${overviewScale}) translate(\${panX}px, \${panY}px)\`;
            lastX = e.clientX; lastY = e.clientY;
        });
        window.addEventListener('pointerup', () => { isPanning = false; viewport.style.cursor = 'default'; });

        function zoomToSlide(index, force = false) {
            // Prevent clicking directly on Ice Breaker stack cards to bypass the Next button
            if (!force && state === 'SLIDE' && slidesData[index].clusterTitle === 'Ice Breaker' && index !== currentIndex) {
                return;
            }
            state = 'SLIDE';
            document.body.classList.remove('overview-state');
            
            currentIndex = index;
            const slide = slidesData[index];
            
            visitedClusters.add(slide.clusterTitle);
            
            const isMobile = window.innerWidth < 768;
            const zoomScale = isMobile ? window.innerWidth / 850 : 1;
            canvas.style.transform = \`scale(\${zoomScale}) translate(\${-slide.x}px, \${-slide.y}px)\`;
            currentTopicLabel.textContent = slide.title;
            
            cards.forEach((c, i) => {
                if (i === currentIndex) c.classList.add('active');
                else c.classList.remove('active');
                
                if (visitedClusters.has(slidesData[i].clusterTitle)) {
                    c.classList.remove('unrevealed');
                } else {
                    c.classList.add('unrevealed');
                }

                if (slidesData[i].clusterTitle === 'Ice Breaker' && 
                    slidesData[i].clusterTitle === slide.clusterTitle && slidesData[i].indexInCluster < slide.indexInCluster) {
                    c.classList.add('peeled');
                } else {
                    c.classList.remove('peeled');
                }
            });
            
            prevBtn.disabled = false;
            nextBtn.disabled = currentIndex === cards.length - 1;
        }

        function navigate(direction) {
            if (state === 'OVERVIEW') {
                if (direction === -1) {
                    state = 'TITLE';
                    document.getElementById('titleOverlay').classList.remove('hidden');
                    controlsBox.classList.remove('visible');
                    topBar.classList.remove('visible');
                } else {
                    zoomToSlide(0, true); 
                }
                return;
            }
            
            let newIndex = currentIndex + direction;
            if (newIndex >= 0 && newIndex < cards.length) {
                zoomToSlide(newIndex, true);
            } else if (newIndex < 0) {
                showOverview();
            }
        }

        canvas.addEventListener('click', (e) => {
            if (state !== 'SLIDE') return;
            
            if (e.target.tagName === 'IMG') {
                const card = e.target.closest('.card');
                if (card && card.id !== slidesData[currentIndex].id) return;
                
                e.stopPropagation();
                focusModal.innerHTML = \`<img src="\${e.target.src}" style="max-width: 90vw; max-height: 90vh; object-fit: contain; border-radius: 12px; box-shadow: 0 30px 60px rgba(0,0,0,0.6); transform: scale(0.8) translateY(50px); transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);" class="lightbox-img" onclick="event.stopPropagation()">\`;
                focusModal.classList.add('visible');
                setTimeout(() => { const img = focusModal.querySelector('.lightbox-img'); if (img) img.style.transform = 'scale(1) translateY(0)'; }, 10);
                return;
            }

            const targetBlock = e.target.closest('.focus-group, .title-slide h2');
            if (targetBlock) {
                const card = targetBlock.closest('.card');
                if (card && card.id !== slidesData[currentIndex].id) return;

                e.stopPropagation();
                
                let headingHtml = '';
                const mainHeading = card.querySelector('h2');
                if (mainHeading && !targetBlock.contains(mainHeading)) {
                    headingHtml = mainHeading.outerHTML;
                }

                let imgHtml = '';
                const tempBlock = targetBlock.cloneNode(true);
                const imgInBlock = tempBlock.querySelector('img');
                
                if (imgInBlock) {
                    imgHtml = imgInBlock.outerHTML;
                    imgInBlock.remove(); // Remove it from the text content!
                } else {
                    const imgInCard = card.querySelector('img');
                    if (imgInCard) {
                        imgHtml = imgInCard.outerHTML;
                    }
                }
                
                // If it's the title slide h2, just show it directly
                const contentHtml = tempBlock.classList.contains('focus-group') ? tempBlock.innerHTML : tempBlock.outerHTML;

                let focusLayout = '';
                if (imgHtml) {
                    focusLayout = \`
                        <div class="focus-layout" style="display: flex; gap: 40px; align-items: stretch; justify-content: center; max-width: 95vw; max-height: 90vh;" onclick="event.stopPropagation()">
                            <div class="focus-board" style="flex: 1; min-width: 600px; max-width: 800px; max-height: 90vh; overflow-y: auto; transform: scale(1) translateY(0); margin: 0;">
                                <div class="tape"></div>\${headingHtml}<div class="focus-content">\${contentHtml}</div>
                            </div>
                            <div class="focus-image-frame" style="flex: 1; max-width: 900px; display: flex; align-items: center; justify-content: center; background: #fff; padding: 20px; border-radius: 4px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); background-image: repeating-linear-gradient(transparent, transparent 31px, rgba(0,0,0,0.05) 31px, rgba(0,0,0,0.05) 32px); background-position: 0 30px;">
                                \${imgHtml}
                            </div>
                        </div>
                    \`;
                } else {
                    focusLayout = \`
                        <div class="focus-board" onclick="event.stopPropagation()">
                            <div class="tape"></div>\${headingHtml}<div class="focus-content">\${contentHtml}</div>
                        </div>
                    \`;
                }

                focusModal.innerHTML = focusLayout;
                focusModal.classList.add('visible');
            }
        });

        focusModal.addEventListener('click', () => { focusModal.classList.remove('visible'); });

        document.addEventListener('keydown', (e) => {
            if (focusModal.classList.contains('visible')) {
                if (e.key === 'Escape' || e.key === 'Enter') focusModal.classList.remove('visible');
                return;
            }
            if (state === 'TITLE') {
                if (e.key === 'Enter' || e.key === 'Space') startPresentation();
                return;
            }
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                if (state === 'OVERVIEW' || currentIndex < cards.length - 1) { navigate(1); e.preventDefault(); }
            } else if (e.key === 'ArrowLeft') {
                if (state === 'SLIDE' || state === 'OVERVIEW') { navigate(-1); e.preventDefault(); }
            } else if (e.key === 'Escape') {
                showOverview();
            }
        });
        setTimeout(() => {
            initChalkDust();
        }, 100);

        function initChalkDust() {
            const containers = document.querySelectorAll('.chalk-answer-container');
            containers.forEach(container => {
                const canvas = container.querySelector('.dust-canvas');
                const ctx = canvas.getContext('2d');
                
                canvas.width = container.offsetWidth || 800;
                canvas.height = container.offsetHeight || 200;

                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                for(let i=0; i<3000; i++) {
                    ctx.fillStyle = Math.random() > 0.5 ? '#f8f9fa' : '#e2e8f0';
                    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
                }

                ctx.fillStyle = '#1e293b';
                ctx.font = '28px Kalam';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('Scrub to reveal', canvas.width / 2, canvas.height / 2);

                ctx.globalCompositeOperation = 'destination-out';
                
                let isDrawing = false;
                
                function getPos(e) {
                    const r = canvas.getBoundingClientRect();
                    const scaleX = canvas.width / r.width;
                    const scaleY = canvas.height / r.height;
                    return {
                        x: (e.clientX - r.left) * scaleX,
                        y: (e.clientY - r.top) * scaleY
                    };
                }

                function startDrawing(e) {
                    isDrawing = true;
                    erase(e);
                }
                
                function stopDrawing() {
                    isDrawing = false;
                }
                
                function erase(e) {
                    if (!isDrawing) return;
                    e.stopPropagation(); 
                    const pos = getPos(e);
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, 45, 0, Math.PI * 2);
                    ctx.fill();
                }

                canvas.addEventListener('mousedown', startDrawing);
                canvas.addEventListener('mousemove', erase);
                canvas.addEventListener('mouseup', stopDrawing);
                canvas.addEventListener('mouseleave', stopDrawing);
                canvas.addEventListener('click', e => e.stopPropagation());
            });
        }
    </script>
</body>
</html>`;

    fs.writeFileSync('presentation.html', htmlContent);
    console.log('Knowledge Map Sticky Note Presentation generated successfully.');
}

buildHtml();
