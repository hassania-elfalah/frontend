import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Star, Award, Shield, Clock, Sparkles, ChevronRight, Wifi, Car, UtensilsCrossed, Dumbbell } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';

const Index = () => {
    const { settings } = useSettings();

    const data = {
        features: [
            { icon: Star, t: 'Service 5 Étoiles', d: 'Un service personnalisé pour un séjour inoubliable.' },
            { icon: Award, t: 'Qualité Premium', d: 'Équipements haut de gamme et confort optimal.' },
            { icon: Shield, t: 'Sécurité Garantie', d: 'Surveillance 24h/24 pour votre tranquillité.' },
            { icon: Clock, t: 'Disponible 24/7', d: 'Notre équipe est à votre disposition à tout moment.' }
        ],
        amenities: [
            { icon: Wifi, l: 'WiFi Gratuit' },
            { icon: Car, l: 'Parking Privé' },
            { icon: UtensilsCrossed, l: 'Restaurant' },
            { icon: Dumbbell, l: 'Salle de Sport' }
        ]
    };

    return (
        <Layout>
            <section className="relative h-[85vh] flex items-center bg-black">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920)' }} />
                <div className="container relative mx-auto px-4">
                    <div className="max-w-2xl text-white">
                        <div className="flex items-center gap-2 mb-4 text-[#D4A017]"><Sparkles size={20} /> <span className="uppercase tracking-widest text-sm font-bold">{settings.hotel_name || 'Hôtel Plaza'}</span></div>
                        <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">Vivez une <span className="text-[#D4A017] block">Expérience Unique</span></h1>
                        <p className="mt-6 text-lg opacity-80 leading-relaxed font-medium">Découvrez le summum du confort et de l'élégance dans un cadre prestigieux.</p>
                        <div className="mt-8 flex gap-4">
                            <Link to="/rooms"><Button size="lg" className="bg-[#D4A017] hover:bg-[#B8860B] shadow-xl">Réserver <ChevronRight className="ml-2" /></Button></Link>
                            <Link to="/rooms"><Button size="lg" variant="outline" className="text-[#B8860B] border-white/20 hover:bg-white/10 backdrop-blur-sm">Nos Chambres</Button></Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="border-b bg-card py-6"><div className="container mx-auto px-4 flex flex-wrap justify-between gap-4">
                {data.amenities.map(a => <div key={a.l} className="flex items-center gap-3"><a.icon className="text-[#D4A017]" size={20} /> <span className="text-sm font-bold tracking-tight">{a.l}</span></div>)}
            </div></div>

            <section className="py-20 text-center"><div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold font-display mb-12">Pourquoi Nous Choisir ?</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {data.features.map(f => (
                        <div key={f.t} className="p-6 group hover:translate-y-[-5px] transition-transform">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-white transition-colors shadow-sm"><f.icon size={32} /></div>
                            <h3 className="text-xl font-bold mb-3 tracking-tight">{f.t}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                        </div>
                    ))}
                </div>
            </div></section>

            <section className="bg-accent/30 py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold font-display">Nos Services d'Exception</h2>
                        <p className="text-muted-foreground mt-2 font-medium italic">Le confort et le luxe à chaque instant.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {/* Salle de Sport */}
                        <div className="group relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="/hotel_gym_1771797084194.png"
                                    alt="Salle de Sport"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 p-8 w-full text-white">
                                <div className="w-12 h-12 bg-[#D4A017] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                    <Dumbbell size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Salle de Sport</h3>
                                <p className="text-sm opacity-80 leading-relaxed mb-4">
                                    Équipements de pointe et coachs personnels pour maintenir votre forme physique.
                                </p>
                                <ul className="grid grid-cols-2 gap-2">
                                    {['Équipements Pro', 'Coach Privé', 'Yoga & Zen', '24h/24'].map(item => (
                                        <li key={item} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/10 py-1 px-2 rounded-lg backdrop-blur-md border border-white/10">
                                            <span className="w-1 h-1 bg-[#D4A017] rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Restaurant */}
                        <div className="group relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="/luxury_restaurant_1771797146940.png"
                                    alt="Restaurant"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 p-8 w-full text-white">
                                <div className="w-12 h-12 bg-[#D4A017] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                    <UtensilsCrossed size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Gastronomie</h3>
                                <p className="text-sm opacity-80 leading-relaxed mb-4">
                                    Une cuisine raffinée préparée par nos chefs étoilés pour une expérience unique.
                                </p>
                                <ul className="grid grid-cols-2 gap-2">
                                    {['Chef Étoilé', 'Cave à Vins', 'Vue Panoramique', 'Produits Bio'].map(item => (
                                        <li key={item} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/10 py-1 px-2 rounded-lg backdrop-blur-md border border-white/10">
                                            <span className="w-1 h-1 bg-[#D4A017] rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Parking */}
                        <div className="group relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="/hotel_parking_1771797112538.png"
                                    alt="Parking"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 p-8 w-full text-white">
                                <div className="w-12 h-12 bg-[#D4A017] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                    <Car size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Parking Sécurisé</h3>
                                <p className="text-sm opacity-80 leading-relaxed mb-4">
                                    Un espace privé et sécurisé 24h/24 avec service voiturier premium.
                                </p>
                                <ul className="grid grid-cols-2 gap-2">
                                    {['Voiturier 24/7', 'Bornes Élec', 'Vidéo-Surv', 'Lavage Auto'].map(item => (
                                        <li key={item} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/10 py-1 px-2 rounded-lg backdrop-blur-md border border-white/10">
                                            <span className="w-1 h-1 bg-[#D4A017] rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-32 text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920)' }} />
                <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]" />
                <div className="container relative mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Prêt pour un Séjour <span className="text-[#D4A017]">Inoubliable</span> ?</h2>
                    <p className="mb-10 opacity-80 max-w-xl mx-auto font-medium">Réservez dès maintenant et profitez de nos offres exclusives.</p>
                    <Link to="/rooms"><Button size="lg" className="bg-[#D4A017] hover:bg-[#B8860B] h-14 px-10 text-lg shadow-2xl">Réserver Ma Chambre <ChevronRight className="ml-2" /></Button></Link>
                </div>
            </section>


        </Layout>
    );
};

export default Index;
