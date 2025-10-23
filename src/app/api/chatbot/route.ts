import { NextRequest, NextResponse } from 'next/server';

// Content moderation - check for inappropriate content
function moderateContent(text: string): { isAppropriate: boolean; reason?: string } {
  const inappropriatePatterns = [
    /\b(fuck|shit|bitch|ass|damn|hell|bastard|crap)\b/gi,
    /\b(sex|porn|xxx|nude|naked)\b/gi,
    /\b(kill|murder|suicide|death|die)\b/gi,
    /\b(hate|racist|nazi|terrorism)\b/gi,
    /\b(drug|cocaine|heroin|meth|weed)\b/gi,
  ];

  for (const pattern of inappropriatePatterns) {
    if (pattern.test(text)) {
      return { 
        isAppropriate: false, 
        reason: 'Your message contains inappropriate content. Please keep your messages respectful and appropriate for our community.' 
      };
    }
  }

  return { isAppropriate: true };
}

// UCon Ministries knowledge base
const knowledgeBase = {
  greeting: [
    "Hello! Welcome to UCon Ministries. How can I assist you today?",
    "Hi there! I'm here to help you learn about UCon Ministries and our programs.",
    "Welcome! Feel free to ask me about our LDI program, services, or how to get involved."
  ],
  about: `UCon Ministries exists to meet individuals at their point of need, offering immediate practical assistance and guiding them through a comprehensive journey of healing and transformation. Our mission is to transform feelings of worthlessness and mental health struggles into enduring purpose and dignity for those deeply impacted by the justice system, addiction, homelessness, and personal brokenness.

Our slogan is "Where Your Past Becomes Your Purpose" - emphasizing that we believe everyone has the potential to transform their past struggles into a powerful purpose.`,
  
  ldi: `The Leadership Development Institute (LDI) is our intensive, 64-week, four-tier program focused on deep personal transformation and leadership development. 

The four tiers are:
- **Tier 1: Ascension** - Foundational intensive tier for mental health restoration and life skills
- **Tier 2: Pinnacle** - Moving from personal transformation to mentoring others
- **Tier 3: Apex** - Influencing entire systems and community mobilization
- **Tier 4: Ucon** - National/international scale movement-building and policy development

The LDI requires a signed commitment agreement and provides housing, support, and comprehensive training.`,
  
  services: `UCon Ministries operates on a three-track model:

**Track 1: LDI Program** - Commitment-based intensive leadership development
**Track 2: Open Services** - No commitment required, including workshops, Bible studies, pastoral services, and mentoring
**Track 3: Outreach & Advocacy** - Transportation services, food drives, shelter assistance, and rehabilitation referrals

All services are designed to meet people where they are in their journey.`,
  
  prayer: `Our Interactive Prayer Wall allows community members to share prayer requests and pray for one another. You can submit prayer requests anonymously or with your name, and others in the community can lift up prayers for you. We believe in the power of unified prayer and community support.`,
  
  contact: `You can reach UCon Ministries through:
- Our Contact page on the website
- Email us with your questions
- Call our main office during business hours
- Submit a prayer request on our Prayer Wall
- Visit us in person - we're located in Colorado

For immediate assistance or emergency support, please use our 24/7 prayer support line.`,
  
  registration: `To register for our programs:

**LDI Program**: Visit our LDI waiting list page to submit your interest. Our team will review your application and contact you about the next steps. The LDI requires commitment and housing is provided.

**Open Services**: No registration needed! Simply attend any of our workshops, Bible studies, or connect with our pastoral team.

**Newsletter**: You can sign up for our newsletter to stay updated on events and programs.`,
  
  volunteer: `We welcome volunteers! Here's how you can get involved:
- Serve in our outreach programs
- Assist with food drives and distribution
- Mentor LDI participants
- Help with administrative tasks
- Join our prayer team

Contact us through our Contact page to learn more about volunteer opportunities.`,
  
  donation: `Your donations help transform lives! We accept:
- One-time donations
- Monthly recurring donations
- In-kind donations (food, clothing, supplies)

Visit our Donations page to contribute. All donations are tax-deductible and go directly to supporting our programs and the individuals we serve.`
};

function generateResponse(message: string, history: any[]): string {
  const lowerMessage = message.toLowerCase();
  
  // Greeting patterns
  if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/.test(lowerMessage)) {
    return knowledgeBase.greeting[Math.floor(Math.random() * knowledgeBase.greeting.length)];
  }
  
  // About UCon
  if (/(about|who are|what is|tell me about|mission|purpose|slogan)/i.test(lowerMessage) && 
      /(ucon|ministry|ministries|organization)/i.test(lowerMessage)) {
    return knowledgeBase.about;
  }
  
  // LDI Program
  if (/(ldi|leadership development|program|tier|ascension|pinnacle|apex)/i.test(lowerMessage)) {
    return knowledgeBase.ldi;
  }
  
  // Services
  if (/(service|services|track|help|support|what do you offer)/i.test(lowerMessage)) {
    return knowledgeBase.services;
  }
  
  // Prayer Wall
  if (/(prayer|pray|prayer wall|prayer request)/i.test(lowerMessage)) {
    return knowledgeBase.prayer;
  }
  
  // Contact
  if (/(contact|reach|call|email|phone|location|address|where are you)/i.test(lowerMessage)) {
    return knowledgeBase.contact;
  }
  
  // Registration
  if (/(register|registration|sign up|join|enroll|apply|application)/i.test(lowerMessage)) {
    return knowledgeBase.registration;
  }
  
  // Volunteer
  if (/(volunteer|help out|get involved|serve)/i.test(lowerMessage)) {
    return knowledgeBase.volunteer;
  }
  
  // Donations
  if (/(donate|donation|give|contribute|support financially)/i.test(lowerMessage)) {
    return knowledgeBase.donation;
  }
  
  // Default response
  return `I'd be happy to help! I can provide information about:

- UCon Ministries and our mission
- The Leadership Development Institute (LDI) program
- Our services and how we can help
- Prayer wall and community support
- How to register or get involved
- Volunteer opportunities
- Making a donation

What would you like to know more about?`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ 
        error: 'Message is required',
        code: 'MISSING_MESSAGE' 
      }, { status: 400 });
    }

    // Content moderation
    const moderation = moderateContent(message);
    if (!moderation.isAppropriate) {
      return NextResponse.json({
        message: moderation.reason || 'Please keep your messages appropriate and respectful.',
        moderated: true
      }, { status: 200 });
    }

    // Generate response
    const response = generateResponse(message, history || []);

    return NextResponse.json({
      message: response,
      moderated: false
    }, { status: 200 });

  } catch (error) {
    console.error('Chatbot error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}
