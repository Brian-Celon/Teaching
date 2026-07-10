const PptxGenJS = require('pptxgenjs');
let pptx = new PptxGenJS();

pptx.layout = 'LAYOUT_16x9';

// Master slide definition for consistent design
pptx.defineSlideMaster({
  title: 'MASTER_SLIDE',
  background: { color: 'FFFFFF' },
  objects: [
    { rect: { x: 0, y: 0, w: '100%', h: 0.5, fill: { color: '002060' } } }, // Navy blue top accent
    { rect: { x: 0, y: 5.1, w: '100%', h: 0.5, fill: { color: '4B8BBE' } } }, // Light blue bottom accent
    { text: { text: 'Demo Teaching Presentation', options: { x: 0.5, y: 5.2, w: 4, h: 0.3, color: 'FFFFFF', fontSize: 10, fontFace: 'Calibri' } } },
  ]
});

// Title Master
pptx.defineSlideMaster({
  title: 'TITLE_MASTER',
  background: { color: 'FFFFFF' },
  objects: [
    { rect: { x: 0, y: 0, w: '100%', h: '100%', fill: { color: '002060' } } }, // Navy background for title
    { rect: { x: '5%', y: '85%', w: '90%', h: 0.1, fill: { color: '4B8BBE' } } }, // Light blue accent line
  ]
});

// Function to create a standard content slide
function createSlide(title, bullets) {
    let slide = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    slide.addText(title, { x: 0.5, y: 0.8, w: '90%', h: 0.8, fontSize: 32, fontFace: 'Calibri', color: '002060', bold: true });
    
    if (bullets && bullets.length > 0) {
        let textOptions = bullets.map(b => ({
            text: b.text,
            options: { bullet: b.level === 1 ? false : true, indentLevel: b.level || 0, breakLine: true }
        }));
        slide.addText(textOptions, { x: 0.5, y: 1.8, w: '90%', h: 3.0, fontSize: 22, fontFace: 'Calibri', color: '333333', align: 'left', valign: 'top', lineSpacing: 30 });
    }
}

// Function to create a section title slide
function createTitleSlide(title, subtitle) {
    let slide = pptx.addSlide({ masterName: 'TITLE_MASTER' });
    slide.addText(title, { x: 0.5, y: 2.0, w: '90%', h: 1.5, fontSize: 44, fontFace: 'Calibri', color: 'FFFFFF', bold: true, align: 'center' });
    if (subtitle) {
        slide.addText(subtitle, { x: 0.5, y: 3.2, w: '90%', h: 1.0, fontSize: 24, fontFace: 'Calibri', color: '4B8BBE', align: 'center' });
    }
}

// 1. Title
createTitleSlide("Teaching and Learning Process", "Group 2");

// 2. Ice Breaker
createTitleSlide("Ice Breaker", "");

// 3. Recap
createTitleSlide("Recap of Previous Lesson", "");

// 4. Objective of the lesson
createSlide("Objectives of the Lesson", [
    { text: "Understand the core elements of the teaching-learning process.", level: 0 },
    { text: "Identify the various roles of a teacher in a classroom.", level: 0 },
    { text: "Explore different learning styles and multiple intelligences.", level: 0 },
    { text: "Apply Thorndike's Laws of Learning and other learning theories.", level: 0 }
]);

// 5. Presenter 2: Roles of the Teacher
createTitleSlide("Roles of the Teacher", "Presenter 2");
createSlide("Roles of the Teacher", [
    { text: "Teacher as Manager: Systematic classroom order.", level: 0 },
    { text: "Teacher as Leader: Director, coach, and supporter.", level: 0 },
    { text: "Teacher as Surrogate Parent: Providing security and emotional well-being.", level: 0 },
    { text: "Teacher as Counselor: Guidance figure for personal challenges.", level: 0 },
    { text: "Teacher as Model: Exemplar for behavior and judgment.", level: 0 },
    { text: "Teacher as Public Relations Specialist: External stakeholder management.", level: 0 },
    { text: "Teacher as Facilitator & Instructor: Guiding core instruction.", level: 0 }
]);

// 6. Presenter 1: The Teaching-Learning Process
createTitleSlide("The Teaching-Learning Process", "Presenter 1");
createSlide("Elements of the Teaching-Learning Process", [
    { text: "Systematic interaction between teacher, learner, and environment.", level: 0 },
    { text: "The Learner:", level: 0 },
    { text: "Core subject and active participant in learning.", level: 1 },
    { text: "The Teacher:", level: 0 },
    { text: "Prime mover of education, guide, facilitator, and motivator.", level: 1 },
    { text: "The Learning Environment:", level: 0 },
    { text: "Physical and psychological space for interaction.", level: 1 },
    { text: "All elements must be present for real learning to exist.", level: 0 }
]);

// 7. Presenter 3: The Learning Environment
createTitleSlide("The Learning Environment & Visual/Aural Styles", "Presenter 3");
createSlide("The Learning Environment", [
    { text: "Refers to the classroom or surroundings where students learn.", level: 0 },
    { text: "Includes teachers, classmates, facilities, and learning atmosphere.", level: 0 },
    { text: "A positive environment improves focus, motivation, and participation.", level: 0 },
    { text: "Visual Learning Style:", level: 0 },
    { text: "Learns by seeing (pictures, charts, graphs).", level: 1 },
    { text: "Can easily visualize ideas.", level: 1 },
    { text: "Aural Learning Style:", level: 0 },
    { text: "Learns by hearing (lectures, discussions).", level: 1 }
]);

// 8. Presenter 4: Learning Styles & Multiple Intelligences
createTitleSlide("Learning Styles & Multiple Intelligences", "Presenter 4");
createSlide("Kinesthetic & Read/Write Styles", [
    { text: "Read/Write Learning Style:", level: 0 },
    { text: "Prefer written text, enjoy reading and writing.", level: 1 },
    { text: "Kinesthetic Learning Style:", level: 0 },
    { text: "Learn through trial and error, prefer hands-on approaches.", level: 1 },
    { text: "Multiple Intelligences (Gardner):", level: 0 },
    { text: "Spatial Intelligence (Picture Smart)", level: 1 },
    { text: "Musical Intelligence (Music Smart)", level: 1 },
    { text: "Bodily-Kinesthetic, Linguistic, Logical-Mathematical, etc.", level: 1 }
]);

// 9. Presenter 5: Thorndike's Laws of Learning (Primary)
createTitleSlide("Thorndike's Laws of Learning", "Presenter 5");
createSlide("Primary Laws of Learning", [
    { text: "The Law of Readiness (The \"Get Ready\" Rule):", level: 0 },
    { text: "Learning starts with mindset and mental preparation.", level: 1 },
    { text: "The Law of Exercise (The \"Practice\" Rule):", level: 0 },
    { text: "Repetition and practice strengthen learning.", level: 1 },
    { text: "The Law of Effect:", level: 0 },
    { text: "Actions followed by rewards are strengthened.", level: 1 }
]);

// 10. Presenter 6: Secondary Laws of Thorndike
createTitleSlide("Secondary Laws of Thorndike", "Presenter 6");
createSlide("Secondary Laws of Learning", [
    { text: "Law of Belongingness:", level: 0 },
    { text: "Learning is faster when learners perceive a natural connection.", level: 1 },
    { text: "Law of Intensity:", level: 0 },
    { text: "Vivid, dramatic, or striking experiences are remembered deeply.", level: 1 },
    { text: "Law of Forgetting:", level: 0 },
    { text: "Skills and knowledge that are not used gradually fade.", level: 1 }
]);

// 11. Presenter 7: Theories of Learning
createTitleSlide("Theories of Learning", "Presenter 7");
createSlide("Behaviorism & Operant Conditioning", [
    { text: "Behaviorism:", level: 0 },
    { text: "Denies inborn tendencies.", level: 1 },
    { text: "Learning is a process of building reflexes through interaction.", level: 1 },
    { text: "Operant Conditioning (B.F. Skinner):", level: 0 },
    { text: "A person must actively do something to the environment.", level: 1 },
    { text: "Actions are taken to produce a result or gain a reward.", level: 1 }
]);

// 12. Presenter 8: Cognitive Perspectives
createTitleSlide("Cognitive Perspectives", "Presenter 8");
createSlide("Cognitive Theory & Intelligence", [
    { text: "Cognitive Perspective:", level: 0 },
    { text: "Focuses on mental processes (thinking, memory, reasoning).", level: 1 },
    { text: "Gestalt Theory: \"The whole is greater than the sum of its parts.\"", level: 0 },
    { text: "Field Theory (Kurt Lewin):", level: 0 },
    { text: "Behavior = Person + Environment", level: 1 },
    { text: "Intelligence Theories:", level: 0 },
    { text: "Alfred Binet: Intelligence as problem-solving.", level: 1 },
    { text: "Charles Spearman: General (g-factor) & Specific (s-factor).", level: 1 }
]);

// 13. Assessment
createTitleSlide("Assessment", "");

// 14. Bible Verse
createTitleSlide("Bible Verse", "");

pptx.writeFile({ fileName: 'Demo_Teaching_Presentation.pptx' }).then(fileName => {
    console.log('created file: ' + fileName);
});
