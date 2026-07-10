function getNewSlides(stickyColors) {
    let code = ``;

    code += `
    addSlide('The Teaching-Learning Process', \`<div class="title-slide"><h2>The Teaching-Learning Process</h2></div>\`, 'presenter-1', '#fdfdfd');
    addSlide('The Teaching-Learning Process', \`<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.5rem; line-height: 1.8;">
            <li style="margin-bottom: 1rem;"><strong>Teaching & Learning:</strong> The transfer of knowledge from giver to receiver. Fails if any element is missing.</li>
            <li style="margin-bottom: 1rem;"><strong>The Teacher:</strong> The prime mover. Directs the flow, facilitates, and controls the process.</li>
            <li style="margin-bottom: 1rem;"><strong>The Learner:</strong> The key participant and primary subject. Their acquired knowledge determines if objectives are met.</li>
            <li style="margin-bottom: 1rem;"><strong>The Environment:</strong> A favorable setting that removes communication barriers and facilitates smooth teaching.</li>
        </ul>
    </div></div>\`, 'presenter-1', stickyColors[1]);

    addSlide('Roles of the Teacher', \`<div class="title-slide"><h2>Roles of the Teacher</h2></div>\`, 'presenter-2', '#fdfdfd');
    addSlide('Roles of the Teacher', \`<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.5rem; line-height: 1.8;">
            <li style="margin-bottom: 1rem;"><strong>Manager:</strong> Maintains systematic classroom order.</li>
            <li style="margin-bottom: 1rem;"><strong>Leader:</strong> Acts as a director, coach, and supporter.</li>
            <li style="margin-bottom: 1rem;"><strong>Surrogate Parent:</strong> Provides security and emotional well-being.</li>
            <li style="margin-bottom: 1rem;"><strong>Counselor:</strong> Offers guidance for personal challenges.</li>
            <li style="margin-bottom: 1rem;"><strong>Model:</strong> Serves as an exemplar for behavior and judgment.</li>
            <li style="margin-bottom: 1rem;"><strong>Public Relations Specialist:</strong> Manages external stakeholders.</li>
            <li style="margin-bottom: 1rem;"><strong>Facilitator & Instructor:</strong> Guides core instruction.</li>
        </ul>
    </div></div>\`, 'presenter-2', stickyColors[2]);

    addSlide('Learning Styles', \`<div class="title-slide"><h2>Learning Styles</h2></div>\`, 'presenter-3', '#fdfdfd');
    addSlide('Learning Styles', \`<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.5rem; line-height: 1.8;">
            <li style="margin-bottom: 1rem;"><strong>Visual:</strong> Learns by seeing (pictures, charts, diagrams). Fast talkers, easily visualize ideas.</li>
            <li style="margin-bottom: 1rem;"><strong>Aural:</strong> Learns by hearing (lectures, discussions). Natural listeners, slow speakers.</li>
            <li style="margin-bottom: 1rem;"><strong>Read/Write:</strong> Prefers written text. Enjoys reading/writing.</li>
            <li style="margin-bottom: 1rem;"><strong>Kinesthetic:</strong> Learns through hands-on approaches (trial and error). Uses all senses.</li>
        </ul>
    </div></div>\`, 'presenter-3', stickyColors[3]);

    addSlide('Multiple Intelligences', \`<div class="title-slide"><h2>Multiple Intelligences</h2></div>\`, 'presenter-4', '#fdfdfd');
    addSlide('Multiple Intelligences', \`<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.3rem; line-height: 1.6;">
            <li style="margin-bottom: 0.8rem;"><strong>Spatial (Picture Smart):</strong> Thinks in images.</li>
            <li style="margin-bottom: 0.8rem;"><strong>Musical (Music Smart):</strong> Affinity for rhythm and sound.</li>
            <li style="margin-bottom: 0.8rem;"><strong>Linguistic (Word Smart):</strong> Has a way with words.</li>
            <li style="margin-bottom: 0.8rem;"><strong>Bodily-Kinesthetic (Body Smart):</strong> Good body control, works with hands.</li>
            <li style="margin-bottom: 0.8rem;"><strong>Logical-Mathematical (Number Smart):</strong> Excels at science and math.</li>
            <li style="margin-bottom: 0.8rem;"><strong>Interpersonal (People Smart):</strong> Thrives around others.</li>
            <li style="margin-bottom: 0.8rem;"><strong>Intrapersonal (Self-Smart):</strong> Introspective and independent.</li>
            <li style="margin-bottom: 0.8rem;"><strong>Natural (Nature Smart):</strong> Understands patterns in nature.</li>
        </ul>
    </div></div>\`, 'presenter-4', stickyColors[0]);

    addSlide('Thorndike’s Laws of Learning', \`<div class="title-slide"><h2>Thorndike’s Laws of Learning</h2></div>\`, 'presenter-5', '#fdfdfd');
    addSlide('Thorndike’s Laws of Learning', \`<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.5rem; line-height: 1.8;">
            <li style="margin-bottom: 1rem;"><strong>Law of Readiness ("Get Ready"):</strong> Learning starts with a prepared mindset; forced learning fails.</li>
            <li style="margin-bottom: 1rem;"><strong>Law of Exercise ("Practice"):</strong> Repetition strengthens brain connections; lack of use causes rust.</li>
            <li style="margin-bottom: 1rem;"><strong>Law of Effect ("Repeat Winners"):</strong> We repeat actions that lead to rewards/success and avoid those that lead to failure.</li>
            <li style="margin-bottom: 1rem;"><strong>Secondary Laws:</strong>
                <ul>
                    <li><em>Belongingness:</em> Natural association of stimuli speeds learning.</li>
                    <li><em>Intensity:</em> Vivid experiences are remembered more deeply.</li>
                    <li><em>Forgetting:</em> Unused skills fade over time.</li>
                </ul>
            </li>
        </ul>
    </div></div>\`, 'presenter-5', stickyColors[1]);

    addSlide('Other Learning Theories', \`<div class="title-slide"><h2>Other Learning Theories</h2></div>\`, 'presenter-6', '#fdfdfd');
    addSlide('Other Learning Theories', \`<div class="content-slide"><div class="doc-content">
        <ul style="font-size: 1.25rem; line-height: 1.5;">
            <li style="margin-bottom: 0.8rem;"><strong>Operant Conditioning (B.F. Skinner):</strong> Learning through rewards and consequences.
                <ul><li>Primary (food/water) & Secondary (money/praise) rewards. Escape/Avoidance.</li></ul>
            </li>
            <li style="margin-bottom: 0.8rem;"><strong>Cognitive Perspective:</strong> Learning is an internal mental activity, not just behavior. Mind works like a computer.</li>
            <li style="margin-bottom: 0.8rem;"><strong>Gestalt Theory:</strong> People perceive objects as complete wholes. "The whole is greater than the sum of its parts." (Similarity, Proximity, Closure, Continuity)</li>
            <li style="margin-bottom: 0.8rem;"><strong>Field Theory (Kurt Lewin):</strong> Behavior = Person + Environment. A positive environment improves performance.</li>
            <li style="margin-bottom: 0.8rem;"><strong>Intelligence Theories:</strong>
                <ul>
                    <li><em>Alfred Binet:</em> Intelligence is reasoning/problem-solving and can improve through education.</li>
                    <li><em>Charles Spearman:</em> Proposed a general "g-factor" (overall mental ability) and "s-factor" (specific unique talents).</li>
                </ul>
            </li>
        </ul>
    </div></div>\`, 'presenter-6', stickyColors[2]);
    `;
    return code;
}

const fs = require('fs');
fs.writeFileSync('new_slides_code.txt', getNewSlides(['#fef08a', '#bbf7d0', '#bfdbfe', '#fbcfe8']));
