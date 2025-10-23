import { db } from '@/db';
import { prayers } from '@/db/schema';

async function main() {
    const samplePrayers = [
        {
            name: 'Sarah Johnson',
            prayerRequest: 'Please pray for my mother who was just diagnosed with stage 2 breast cancer. She starts chemotherapy next week and we are trusting God for complete healing. The doctors are hopeful, but we need your prayers for strength during this difficult journey.',
            category: 'Healing',
            isAnonymous: false,
            prayerCount: 47,
            isAnswered: false,
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: null,
            prayerRequest: 'I am struggling with severe anxiety and depression after losing my job three months ago. Every day feels like a battle and I need God\'s peace and strength to get through. Please pray that I can find hope again and that He would open new doors for employment.',
            category: 'Strength',
            isAnonymous: true,
            prayerCount: 34,
            isAnswered: false,
            createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: 'Michael Chen',
            prayerRequest: 'I have been offered two job opportunities in different cities and I am seeking God\'s direction for this major life decision. One pays more but takes me away from family, the other keeps me close but is less secure. Pray for wisdom and clarity in hearing His voice.',
            category: 'Guidance',
            isAnonymous: false,
            prayerCount: 23,
            isAnswered: false,
            createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: 'Jennifer Martinez',
            prayerRequest: 'My 16-year-old son has been going through a rebellious phase and our relationship is very strained. He refuses to talk to me and has been making poor choices with his friends. Please pray for God to soften his heart and for restoration in our family. I miss my son so much.',
            category: 'Family',
            isAnonymous: false,
            prayerCount: 56,
            isAnswered: true,
            createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: null,
            prayerRequest: 'We are facing serious financial difficulties after my husband lost his job last month. Bills are piling up and we don\'t know how we will make rent next week. Praying for God\'s provision and for new employment opportunities to open up soon. We trust in His faithfulness.',
            category: 'Provision',
            isAnonymous: true,
            prayerCount: 42,
            isAnswered: false,
            createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: 'David Thompson',
            prayerRequest: 'My wife and I are starting a youth ministry at our church to reach teenagers in our community. We feel called to this but also overwhelmed by the responsibility. Pray for wisdom, energy, and that God would use us powerfully to impact young lives for His kingdom.',
            category: 'Ministry',
            isAnonymous: false,
            prayerCount: 31,
            isAnswered: false,
            createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: 'Rachel Williams',
            prayerRequest: 'I have been praying for five years about a broken relationship with my sister. We haven\'t spoken since our mother\'s funeral and the pain is unbearable. Believing God for complete reconciliation and restoration of our relationship. Please stand with me in prayer for this breakthrough.',
            category: 'Breakthrough',
            isAnonymous: false,
            prayerCount: 38,
            isAnswered: true,
            createdAt: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: 'James Anderson',
            prayerRequest: 'Please pray for my father who is in ICU after a severe heart attack. The doctors say the next 48 hours are critical. We are believing God for a miracle and for His healing hand to be upon my dad. Our family needs your prayers during this scary time.',
            category: 'Healing',
            isAnonymous: false,
            prayerCount: 8,
            isAnswered: false,
            createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: null,
            prayerRequest: 'I am in an abusive marriage and don\'t know what to do. I feel trapped and scared but also worried about my children. Pray for God\'s protection, wisdom to know the right steps to take, and courage to do what needs to be done. I need strength I don\'t have.',
            category: 'Strength',
            isAnonymous: true,
            prayerCount: 51,
            isAnswered: false,
            createdAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: 'Emily Rodriguez',
            prayerRequest: 'Pray for our church as we seek God\'s vision for the next season. Our pastoral team is meeting this week to pray and plan for the future. We want to be faithful to what God is calling us to do and need discernment about new outreach programs and facility expansions.',
            category: 'Guidance',
            isAnonymous: false,
            prayerCount: 19,
            isAnswered: false,
            createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: 'Robert Kim',
            prayerRequest: 'My wife and I have been trying to conceive for three years with no success. We have been through multiple treatments and tests with no answers. Please pray for God\'s miracle in our lives and that He would bless us with a child. The waiting is so painful.',
            category: 'Breakthrough',
            isAnonymous: false,
            prayerCount: 62,
            isAnswered: true,
            createdAt: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            name: null,
            prayerRequest: 'Please pray for provision of reliable transportation. My car broke down and I can\'t afford repairs. I need it to get to work and take my kids to school. Trusting God will make a way where there seems to be no way. Thank you for your prayers.',
            category: 'Provision',
            isAnonymous: true,
            prayerCount: 27,
            isAnswered: true,
            createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        },
    ];

    await db.insert(prayers).values(samplePrayers);
    
    console.log('✅ Prayers seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});