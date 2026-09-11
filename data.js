// Base de données EXHAUSTIVE - Les hommes viennent de Mars, les femmes viennent de Vénus (Dr John Gray)
// Version enrichie au maximum : 13 chapitres détaillés, Grand Dictionnaire 28 expressions, les 101 points vénusiens complets, 
// les 35 points martiens, guide du soutien (Ch. 12), les 4 postures défensives (Ch. 9), les 4 saisons de l'amour (Ch. 13), et 6 scénarios.

const MARS_VENUS_DATA = {
  
  // ==========================================
  // 1. LES 13 CHAPITRES COMPLETS ET APPROFONDIS
  // ==========================================
  chapters: [
    {
      id: 1,
      title: "Les hommes viennent de Mars, les femmes viennent de Vénus",
      subtitle: "La prémisse fondamentale & l'amnésie collective",
      summary: "Imaginez que les Martiens et les Vénusiennes se sont rencontrés dans l'espace, sont tombés éperdument amoureux et ont vécu des siècles de félicité parce qu'ils respectaient leurs différences d'origine. Puis ils sont arrivés sur Terre et ont été frappés par une amnésie soudaine : ils ont oublié qu'ils appartenaient à deux espèces aux besoins opposés. Dès lors, les conflits ont débuté.",
      keyPoints: [
        "L'erreur tragique : Attendre que l'autre réagisse, communique et ressente les choses exactement comme nous.",
        "Les hommes s'attendent à ce que les femmes pensent de façon linéaire et logique comme des Martiens.",
        "Les femmes s'attendent à ce que les hommes devinent intuitivement leurs émotions et besoins comme des Vénusiennes.",
        "Se souvenir de nos différences fondamentales élimine instantanément la rancœur et réintroduit la bienveillance.",
        "L'autre ne cherche pas à vous blesser ou à vous ignorer : il parle simplement sa langue natale."
      ],
      exercises: [
        "Identifiez un reproche récurrent que vous faites à votre partenaire : analysez-le à travers le filtre 'Il/Elle vient d'une autre planète'.",
        "Répétez-vous chaque matin : 'Mon partenaire n'est pas censé fonctionner comme moi'."
      ],
      quote: "L'amour est magique quand on se rappelle nos différences. Il devient tragique quand on les oublie."
    },
    {
      id: 2,
      title: "Monsieur Réparateur et le Comité d'Amélioration du Foyer",
      subtitle: "Le piège des solutions immédiates et des conseils non sollicités",
      summary: "Sur Mars, la valeur suprême est la compétence, la puissance, l'autonomie et le résultat. Un Martien prouve sa valeur en résolvant ses problèmes seul. Sur Vénus, la valeur suprême est la relation, le partage, les sentiments et la connexion. Offrir de l'aide sur Vénus est un acte d'amour ; sur Mars, c'est une insulte à sa compétence.",
      keyPoints: [
        "Monsieur Réparateur (Mr. Fix-It) : Quand une femme partage ses soucis, l'homme croit qu'elle lui demande une solution technique. Il l'interrompt avec des 'Tu n'as qu'à...'. Elle se sent alors rejetée, bâclée et non entendue.",
        "Le Comité d'Amélioration du Foyer (Home-Improvement Committee) : Quand l'homme agit, la femme lui donne spontanément des conseils pour 'l'aider à s'améliorer'. L'homme entend : 'Tu es incompétent, je ne te fais pas confiance'.",
        "Règle d'or pour l'homme : Écouter sans jamais proposer de solution, sauf si elle en formule la demande explicite.",
        "Règle d'or pour la femme : S'abstenir de donner tout conseil non sollicité, même s'il met du temps ou se trompe de chemin."
      ],
      exercises: [
        "Pour l'homme : Écouter pendant 10 minutes montre en main sans dire une seule phrase de conseil, juste des acquiescements empathiques ('Je comprends', 'Ça a dû être difficile').",
        "Pour la femme : Observer l'homme faire une tâche imparfaitement sans intervenir ni faire de remarque."
      ],
      quote: "Pour une femme, être écoutée avec le cœur est le plus beau cadeau. Pour un homme, être laissé libre de réussir seul est la plus belle preuve de respect."
    },
    {
      id: 3,
      title: "Les hommes se retirent dans leur caverne, les femmes parlent",
      subtitle: "La gestion du stress et des contrariétés",
      summary: "Face à l'adversité, hommes et femmes décompressent de façon diamétralement opposée. Le Martien a besoin d'isoler son esprit dans sa caverne pour analyser son problème en silence. La Vénusienne a besoin d'exprimer verbalement l'ensemble de ses ressentis pour évacuer la pression émotionnelle.",
      keyPoints: [
        "La Caverne Martienne : L'homme devient mutique, absorbé par son écran, un journal ou son travail. Ce silence n'est jamais un désamour, c'est son mécanisme biologique de recharge mentale.",
        "Le réflexe destructeur de la femme : Le pourchasser au fond de sa caverne ('Qu'est-ce que tu as ? Parle-moi !'). Cela réveille le Dragon intérieur de l'homme qui se sent agressé.",
        "Le besoin verbal de la femme : Pour elle, parler n'a pas pour but de régler un problème mais de restaurer la connexion. Elle passe d'un sujet à l'autre par association affective.",
        "L'art martien de l'écoute : Quand elle parle, l'homme ne doit pas se sentir coupable des problèmes qu'elle évoque ni chercher à les faire disparaître par la logique."
      ],
      exercises: [
        "Pour l'homme : Avant d'entrer dans votre caverne, dites la phrase magique : 'J'ai besoin d'un moment de calme pour décompresser, je reviens vite vers toi, je t'aime.'",
        "Pour la femme : Quand il s'isole, offrez-lui 45 minutes d'espace total et consacrez ce temps à une activité qui vous fait plaisir."
      ],
      quote: "Ne chassez jamais un homme dans sa caverne. Laissez-le en sortir par lui-même, il vous en sera reconnaissant pour toujours."
    },
    {
      id: 4,
      title: "Comment motiver le sexe opposé",
      subtitle: "Le sentiment d'être utile vs le sentiment d'être choyée",
      summary: "Les hommes sont motivés lorsqu'ils se sentent nécessaires, utiles et capables de faire le bonheur de leur compagne. Les femmes sont motivées lorsqu'elles se sentent choyées, soutenues, respectées et en sécurité affective.",
      keyPoints: [
        "La paralysie martienne : Si un homme a le sentiment que rien de ce qu'il fait ne suffit à satisfaire sa partenaire, il baisse les bras, devient paresseux, passif et s'éloigne.",
        "Le piège du sur-don vénusien : La femme a tendance à donner sans compter en attendant qu'il fasse de même. Quand il ne propose rien spontanément, elle accumule de la rancœur et explose d'amertume.",
        "Pour motiver un homme : Remarquer et apprécier ce qu'il fait déjà. Le remercier avec chaleur même pour une tâche anodine.",
        "Pour motiver une femme : Prendre l'initiative de gestes affectueux sans qu'elle ait à supplier pour obtenir de l'attention."
      ],
      exercises: [
        "Pour la femme : Faites 3 compliments sincères aujourd'hui sur des actions concrètes réalisées par votre conjoint.",
        "Pour l'homme : Prenez une initiative spontanée aujourd'hui pour alléger sa journée sans qu'elle n'ait rien demandé."
      ],
      quote: "Un homme s'épanouit quand il sait qu'il fait une différence positive dans la vie de celle qu'il aime."
    },
    {
      id: 5,
      title: "Parler des langues différentes",
      subtitle: "Le Grand Dictionnaire Martien-Vénusien",
      summary: "Martiens et Vénusiennes utilisent les mêmes mots mais avec des dictionnaires totalement divergents. Les femmes utilisent un langage métaphorique, poétique et hyperbolique pour refléter l'intensité de leurs émotions. Les hommes utilisent un langage factuel, littéral et synthétique.",
      keyPoints: [
        "Les hyperboles vénusiennes : 'Tu ne m'écoutes jamais' ne signifie pas une statistique historique, mais 'En ce moment précis, j'ai besoin de toute ton attention bienveillante'.",
        "Les raccourcis martiens : 'Ça va' ou 'Rien' ne signifie pas 'Je te rejette', mais 'Je suis en train de gérer mon problème dans ma tête, ne t'inquiète pas'.",
        "L'incompréhension littérale : Prendre au pied de la lettre une phrase comme 'On ne sort jamais !' pousse l'homme à se défendre ('Mais on est sortis mardi !'), ce qui déclenche la dispute.",
        "La traduction permanente est indispensable pour préserver la paix et désamorcer les drames imaginaires."
      ],
      exercises: [
        "Dès qu'une phrase commence par 'Tu ne... jamais' ou 'Tu es toujours...', activez mentalement le Décodeur Vénusien avant de répondre."
      ],
      quote: "Le langage des sentiments est une langue étrangère pour celui qui ne cherche que la logique factuelle."
    },
    {
      id: 6,
      title: "Les hommes sont comme des élastiques",
      subtitle: "Le cycle de l'intimité masculine",
      summary: "L'intimité masculine fonctionne comme un élastique. L'homme alterne naturellement entre des phases de grande proximité et des phases de prise de distance nécessaire pour réaffirmer son individualité. Une fois l'élastique tendu à son maximum, il rebondit avec un élan passionné.",
      keyPoints: [
        "Le recul n'est pas un rejet : Ce besoin d'autonomie est instinctif et sain. Il permet à l'homme de retrouver le manque et le désir de sa compagne.",
        "L'erreur fatale de la femme : Le poursuivre lorsqu'il s'éloigne. L'élastique ne peut plus se tendre, l'homme étouffe et perd son impulsion naturelle de retour.",
        "L'accueil au retour : Quand l'homme revient de lui-même, il a besoin d'être accueilli avec joie et tendresse, pas avec des reproches amers sur son absence.",
        "À son retour, il est au sommet de sa disponibilité émotionnelle et amoureuse."
      ],
      exercises: [
        "Pour la femme : Quand il prend de la distance, résistez à l'envie de lui envoyer des messages inquiets. Profitez de ce temps pour vous ressourcer."
      ],
      quote: "L'élastique a besoin de s'étirer pour retrouver toute sa force de propulsion amoureuse."
    },
    {
      id: 7,
      title: "Les femmes sont comme des vagues",
      subtitle: "Le cycle émotionnel féminin et la descente dans le puits",
      summary: "L'estime de soi et le bien-être émotionnel d'une femme ondulent perpétuellement comme une vague océanique. Au sommet, elle rayonne, donne et pardonne facilement. Quand la vague redescend, elle plonge dans 'le puits' de son âme où ses insécurités, peurs et blessures anciennes remontent à la surface.",
      keyPoints: [
        "La descente dans le puits est un processus naturel d'auto-nettoyage émotionnel, pas une maladie mentale ni une crise d'hystérie.",
        "L'homme n'est pas la cause de la descente : Ne croyez pas que vous avez 'échoué' parce qu'elle est triste ou contrariée.",
        "Ce dont elle a besoin au fond du puits : Une présence inconditionnelle, des bras réconfortants, de l'écoute sans tentative de réfutation logique.",
        "Tenter d'empêcher la vague de descendre ('Mais regarde tout ce qu'on a, pourquoi tu te plains ?') aggrave la chute et la fait se sentir coupable."
      ],
      exercises: [
        "Pour l'homme : Quand elle descend dans son puits, soyez son phare : tenez-lui la main, écoutez-la sans chercher à régler ses émotions par la logique."
      ],
      quote: "Une femme au fond de son puits n'a pas besoin qu'on lui démontre qu'il fait soleil dehors, elle a besoin d'une présence aimante dans l'obscurité."
    },
    {
      id: 8,
      title: "Découvrir nos différents besoins émotionnels",
      subtitle: "Les 6 paires de besoins affectifs complémentaires",
      summary: "Hommes et femmes ont chacun six besoins affectifs primaires d'égale importance mais de nature différente. Combler le besoin primaire de votre partenaire déclenche en retour chez lui/elle l'envie naturelle de combler le vôtre.",
      keyPoints: [
        "Paire 1 : Elle a besoin d'ATTENTION (Soin) <---> Il a besoin de CONFIANCE",
        "Paire 2 : Elle a besoin de COMPRÉHENSION <---> Il a besoin d'ACCEPTATION",
        "Paire 3 : Elle a besoin de RESPECT <---> Il a besoin d'APPRÉCIATION",
        "Paire 4 : Elle a besoin de DÉVOUEMENT <---> Il a besoin d'ADMIRATION",
        "Paire 5 : Elle a besoin de VALIDATION <---> Il a besoin d'APPROBATION",
        "Paire 6 : Elle a besoin de RASSURANCE <---> Il a besoin d'ENCOURAGEMENT",
        "Donner à l'autre ce dont NOUS avons besoin (ex: lui donner des conseils au lieu de la confiance, ou lui donner de la logique au lieu de l'écoute) est la source principale des déceptions amoureuses."
      ],
      exercises: [
        "Identifiez avec votre conjoint la paire de besoins la plus fragile dans votre relation en ce moment."
      ],
      quote: "Donner à l'autre ce dont vous avez besoin au lieu de ce dont IL a besoin est le piège le plus sournois de la vie de couple."
    },
    {
      id: 9,
      title: "Comment éviter les disputes",
      subtitle: "Le ton fait la chanson & les 4 postures défensives toxiques",
      summary: "Ce ne sont presque jamais les désaccords d'idées qui blessent un couple, mais le ton condescendant, accusateur ou méprisant employé pour les exprimer. Plus l'intimité est forte, plus une attaque verbale blesse au cœur.",
      keyPoints: [
        "Les 4 postures défensives toxiques :",
        "1. L'Attaque (Le Dragon) : Crier, accuser, blesser, intimider (réflexe d'escalade).",
        "2. La Fuite : S'enfermer dans sa caverne de glace, claquer la porte, punir par le silence méprisant.",
        "3. La Feinte : Prétendre que tout va bien, refouler ses émotions, sourire en façade mais accumuler du ressentiment destructeur.",
        "4. La Capitulation : S'écraser, accepter toute la culpabilité, se positionner en victime impuissante.",
        "L'homme blesse le plus souvent par son ton froid et tranchant qui invalide les sentiments de sa femme.",
        "La femme blesse le plus souvent par son ton désapprobateur qui remet en cause la compétence et la bonne foi de son homme.",
        "Le Time-Out : S'accorder une pause de 20 minutes dès que le ton monte pour calmer les hormones de stress."
      ],
      exercises: [
        "Constatez le moment où votre voix devient agressive ou froide : dites 'J'ai besoin de 15 minutes de pause pour respirer, je t'aime et nous en reparlerons calmement'."
      ],
      quote: "Dans une dispute conjugale, il n'y a jamais de vainqueur : soit les deux gagnent en empathie, soit les deux perdent."
    },
    {
      id: 10,
      title: "Marquer des points auprès du sexe opposé",
      subtitle: "Le barème secret de Vénus : l'illusion des grands exploits",
      summary: "Sur Mars, les points se comptent selon l'ampleur de l'effort : acheter une maison = 50 points, sortir la poubelle = 1 point. Sur Vénus, tous les actes d'amour ont EXACTEMENT LA MÊME VALEUR : 1 geste = 1 point ! Un bouquet de roses = 1 point, un texto tendre au milieu de la journée = 1 point, une écoute de 10 minutes = 1 point.",
      keyPoints: [
        "L'illusion du compte en banque amoureux : L'homme fait un grand effort (ou gagne beaucoup d'argent) et s'imagine avoir capitalisé 50 points d'avance. Il ne fait plus aucun petit geste pendant deux mois : le réservoir émotionnel de sa femme tombe à sec.",
        "Pour combler une Vénusienne : La fréquence et la régularité des petites attentions quotidiennes valent infiniment plus qu'un exploit isolé par an.",
        "Comment la femme marque des points auprès de l'homme : Ne pas critiquer quand il se trompe de route (+5 points), apprécier ce qu'il a fait sans mentionner ce qu'il a oublié (+5 points), l'accueillir avec chaleur quand il sort de sa caverne (+10 points) !"
      ],
      exercises: [
        "Pour l'homme : Appliquez au moins 3 petites attentions différentes de la liste des 101 aujourd'hui.",
        "Pour la femme : Remerciez l'homme chaleureusement pour une petite tâche du quotidien sans ajouter de critique."
      ],
      quote: "Pour une femme, l'amour ne se mesure pas à la démesure des grands exploits occasionnels, mais à la constance des petites attentions quotidiennes."
    },
    {
      id: 11,
      title: "La technique de la Lettre d'Amour",
      subtitle: "Guérir les ressentiments en 5 étapes émotionnelles",
      summary: "Tenter d'échanger verbalement alors que le cœur est encombré de colère et de blessures mène presque inévitablement à l'affrontement. La technique de la Lettre d'Amour permet de traverser par écrit les 5 couches successives de notre âme pour libérer la colère et reconnecter avec l'amour véritable.",
      keyPoints: [
        "Les 5 couches indispensables :",
        "1. Colère & Blâme (Ce qui me met hors de moi)",
        "2. Tristesse & Déception (Ce qui me blesse et me fait de la peine)",
        "3. Peur & Insécurité (Ce qui m'angoisse profondément)",
        "4. Regret & Responsabilité (Ce pour quoi je m'excuse, ma propre part)",
        "5. Amour, Pardon & Souhaits (Mes sentiments profonds et ce que je désire)",
        "La Lettre de Réponse : Écrire soi-même ce que l'on aimerait tant entendre de la part de son partenaire pour clarifier son besoin affectif.",
        "Même si la lettre n'est jamais donnée, l'écrire évacue 95% de l'animosité et rétablit la clarté intérieure."
      ],
      exercises: [
        "Rédigez une lettre d'amour complète en utilisant l'Atelier guidé dès qu'une contrariété vous pèse depuis plus de 24 heures."
      ],
      quote: "Pour retrouver l'amour profond qui sommeille en nous, il faut d'abord avoir le courage d'écouter et de libérer notre colère, notre peine et nos peurs."
    },
    {
      id: 12,
      title: "Comment demander du soutien et l'obtenir",
      subtitle: "L'art de la formulation martienne & le respect du refus",
      summary: "Les hommes adorent rendre service, mais ils ont une aversion viscérale pour le sentiment d'obligation ou d'exigence. Beaucoup de femmes n'osent rien demander directement, s'épuisent, puis finissent par formuler des ordres amers que l'homme rejette aussitôt.",
      keyPoints: [
        "Les 3 phases de l'apprentissage :",
        "1. S'entraîner à demander ce qu'il fait déjà pour l'habituer aux demandes positives.",
        "2. Demander PLUS de soutien en étant brève, directe et sans justification défensive.",
        "3. Pratiquer la demande assertive et accepter sereinement le refus.",
        "Le mot magique 'Pourrais-tu' vs 'Peux-tu' : Pour un Martien, 'Peux-tu sortir les poubelles ?' sonne comme une mise en cause de sa force physique ou un ordre autoritaire. 'Pourrais-tu sortir les poubelles s'il te plaît ?' est une demande polie.",
        "La règle d'or du refus : Quand un homme a le droit absolu de dire 'non' sans subir de punition émotionnelle (froideur, reproches), il devient infiniment plus heureux de dire 'oui' la fois suivante !"
      ],
      exercises: [
        "Pour la femme : Formulez aujourd'hui une demande en utilisant 'Pourrais-tu...' de manière concise (moins de 10 mots) et avec un sourire."
      ],
      quote: "Pour qu'un homme donne de tout son cœur, il doit savoir que son droit de refuser est respecté sans condition."
    },
    {
      id: 13,
      title: "Préserver la magie de l'amour dans la durée",
      subtitle: "Les 4 saisons cycliques de l'amour",
      summary: "L'amour n'est pas une émotion statique et figée. Tout comme la nature, le couple traverse des saisons cycliques inévitables. Comprendre ces saisons empêche de paniquer dès que les premiers froids apparaissent.",
      keyPoints: [
        "Le Printemps : La renaissance, le flirt, l'illusion amoureuse où tout paraît limpide et sans effort.",
        "L'Été : L'effort conscient, le travail sur la relation, la confrontation bienveillante avec nos différences d'origine.",
        "L'Automne : La récolte, la paix profonde, la complicité solide et la gratitude pour le chemin parcouru.",
        "L'Hiver : L'introspection, le repos émotionnel, la prise de recul personnelle indispensable avant la renaissance printanière.",
        "Ne jamais rompre en plein hiver : L'hiver n'est pas la mort de l'amour, mais son temps de repos souterrain."
      ],
      exercises: [
        "Identifiez ensemble dans quelle saison votre couple se trouve actuellement et adaptez vos attentes mutuelles."
      ],
      quote: "L'amour n'est pas un monument de pierre immuable, c'est un jardin vivant qui fleurit, traverse l'hiver et renaît toujours plus magnifique."
    }
  ],

  // ==========================================
  // 2. LE GRAND DICTIONNAIRE MARTIEN-VÉNUSIEN (28 EXPRESSIONS)
  // ==========================================
  dictionary: [
    // VÉNUS VERS MARS (14 Expressions)
    {
      id: "v1",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "On ne sort jamais !",
      literalMartian: "Tu es un conjoint paresseux qui ne m'emmène nulle part et m'ennuie à mourir.",
      venusianMeaning: "J'ai tellement envie de me retrouver en tête-à-tête avec toi, de partager un moment romantique comme à nos débuts.",
      badReaction: "Comment ça on ne sort jamais ?! On est allés au restaurant mardi dernier, tu as la mémoire courte !",
      goodReaction: "C'est vrai qu'un petit moment rien que tous les deux nous ferait le plus grand bien. Où aimerais-tu qu'on aille ?",
      rule: "La Vénusienne utilise des hyperboles ('jamais', 'toujours') pour traduire l'intensité de son émotion présente, jamais une statistique historique."
    },
    {
      id: "v2",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Tu ne m'écoutes jamais !",
      literalMartian: "Tu es sourd ou totalement insensible à ce que je dis.",
      venusianMeaning: "En ce moment précis, je me sens un peu seule et déconnectée de toi. J'ai besoin de ressentir ton attention totale et bienveillante.",
      badReaction: "Si, je t'écoute ! La preuve, tu viens de dire que Sophie avait des problèmes avec son fils !",
      goodReaction: "Pardonne-moi, mon attention s'était égarée. Je pose mon téléphone, je te regarde et je t'écoute vraiment. Raconte-moi.",
      rule: "Écouter ne consiste pas à enregistrer des données pour un interrogatoire, mais à offrir une présence chaleureuse sans interruption."
    },
    {
      id: "v3",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Tout le monde m'ignore / Personne ne fait attention à moi.",
      literalMartian: "Le monde entier conspire pour m'ostraciser et personne ne m'aime.",
      venusianMeaning: "Je me sens fatiguée, vulnérable, invisible aujourd'hui. J'ai besoin d'un gros câlin réconfortant pour me sentir à nouveau précieuse à tes yeux.",
      badReaction: "Arrête d'exagérer, tout le monde au bureau est gentil avec toi et tes amies t'appellent sans cesse !",
      goodReaction: "Viens contre moi... Tu as eu une journée éprouvante. Je suis là avec toi et tu comptes énormément pour moi.",
      rule: "Validez son ressenti sans chercher à lui prouver rationnellement par A + B qu'elle a tort."
    },
    {
      id: "v4",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "La maison est un capharnaüm invivable !",
      literalMartian: "Tu es un souillon et nous vivons dans une porcherie à cause de toi.",
      venusianMeaning: "Je me sens submergée par la charge mentale et le bazar ambiant. J'ai un besoin urgent de souffler et d'un coup de main.",
      badReaction: "Ce n'est pas si sale que ça, arrête de stresser pour rien ! Si ça te dérange, range !",
      goodReaction: "C'est vrai qu'il y a du bazar qui traîne aujourd'hui. Assieds-toi deux minutes, je m'occupe de ranger le salon et la cuisine.",
      rule: "Ne prenez pas son angoisse pour une mise en cause de votre hygiène : c'est un appel à alléger sa pression mentale."
    },
    {
      id: "v5",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Je n'ai absolument rien à me mettre !",
      literalMartian: "Mon dressing est physiquement vide de vêtements.",
      venusianMeaning: "Je ne me sens pas particulièrement séduisante ou à mon avantage aujourd'hui, j'ai envie de me sentir jolie pour toi.",
      badReaction: "Ton armoire va exploser tellement elle est pleine de fringues, regarde toutes ces robes !",
      goodReaction: "Pourtant dans cette robe bleue tu es magnifique, mais si tu as envie de nouveauté, on peut regarder ensemble ou faire un tour en magasin.",
      rule: "Elle n'exprime pas un inventaire textile, mais son état intérieur face à sa féminité du jour."
    },
    {
      id: "v6",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Je dois toujours tout faire moi-même dans cette maison !",
      literalMartian: "Tu es un parasite inutile qui ne fait absolument rien pour le foyer.",
      venusianMeaning: "Je suis à bout d'énergie, j'ai l'impression de porter toutes les responsabilités et j'ai besoin de ton soutien actif sans avoir à quémander.",
      badReaction: "Comment oses-tu dire ça ?! C'est moi qui ai tondu la pelouse, sorti les poubelles et lavé la voiture !",
      goodReaction: "Tu as beaucoup donné ces derniers temps et tu es épuisée. Laisse tout en plan ce soir, dis-moi ce que je peux prendre en charge tout de suite.",
      rule: "Reconnaissez sa fatigue sans brandir la liste de vos propres mérites en réponse."
    },
    {
      id: "v7",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Tu ne m'aimes plus comme avant...",
      literalMartian: "Tu es devenu un menteur froid et indifférent, notre couple est mort.",
      venusianMeaning: "En ce moment, j'ai un petit vide affectif dans mon cœur, j'ai besoin d'être rassurée sur la force de tes sentiments.",
      badReaction: "Mais qu'est-ce que tu racontes encore ?! Si je ne t'aimais pas, je ne serais pas là tous les soirs !",
      goodReaction: "Je t'aime plus que tout au monde. Viens dans mes bras... Qu'est-ce que je peux faire pour que tu le ressentes encore plus fort ?",
      rule: "La Vénusienne a un besoin périodique de réassurance. Ne vous offusquez pas de sa question, comblez son réservoir."
    },
    {
      id: "v8",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Ce n'est pas la peine, laisse tomber !",
      literalMartian: "Le problème est résolu ou n'a plus aucune importance, je peux passer à autre chose.",
      venusianMeaning: "Je suis blessée que tu n'aies pas compris spontanément, mais j'ai encore plus besoin de ton attention et de tes excuses.",
      badReaction: "Super, parfait alors, si ce n'est rien je retourne à mon jeu vidéo !",
      goodReaction: "Non, je vois bien que ça te blesse et ça compte énormément pour moi. Parlons-en calmement, je veux comprendre.",
      rule: "'Laisse tomber' est le signal d'alarme vénusien par excellence : ne laissez surtout pas tomber !"
    },
    {
      id: "v9",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Tu as toujours la tête ailleurs / Tu es tout le temps au travail !",
      literalMartian: "Tu ferais mieux de démissionner, tu te fiches éperdument de ta famille.",
      venusianMeaning: "Ta présence physique me fait plaisir, mais ton attention mentale me manque. J'ai envie d'un vrai moment de connexion avec toi.",
      badReaction: "Je travaille comme un forcené pour payer les factures et cette maison, tu pourrais être reconnaissante !",
      goodReaction: "Tu as raison, mes pensées étaient encore accaparées par mon dossier. Je déconnecte tout maintenant pour être avec toi.",
      rule: "Elle critique votre distraction mentale, pas votre dévouement professionnel."
    },
    {
      id: "v10",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Pourquoi tu ne me demandes jamais mon avis ?",
      literalMartian: "Tu es un dictateur égoïste qui prend toutes les décisions en méprisant mes droits.",
      venusianMeaning: "J'aimerais me sentir consultée et impliquée dans nos choix de couple, pour ressentir notre complicité d'équipe.",
      badReaction: "J'ai pris cette décision pour nous faire gagner du temps, tu trouves toujours à redire !",
      goodReaction: "Pardonne-moi, j'ai foncé tête baissée. Ton opinion m'est très précieuse : qu'en penses-tu réellement ?",
      rule: "Sur Vénus, consulter l'autre est une marque de déférence et d'amour, non une perte de temps."
    },
    {
      id: "v11",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Tu pourrais être un peu plus romantique...",
      literalMartian: "Tu es un rustre goujat sans finesse ni délicatesse.",
      venusianMeaning: "J'ai envie de cette petite étincelle poétique des débuts : un regard, une surprise, un mot doux inattendu.",
      badReaction: "Je t'ai emmenée en week-end à Venise il y a six mois, tu oublies vite !",
      goodReaction: "Tu as raison mon amour, nous méritons plus de magie au quotidien. Je nous prépare une petite surprise ce week-end.",
      rule: "Le romantisme vénusien se nourrit de petites intentions fraîches, pas de souvenirs datant de six mois."
    },
    {
      id: "v12",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Tu as encore oublié ce que je t'avais dit !",
      literalMartian: "Tu as le cerveau d'un poisson rouge et mes paroles ne valent rien pour toi.",
      venusianMeaning: "Je me sens déçue parce que ce détail était important pour moi et j'espérais que tu t'en souviendrais.",
      badReaction: "J'ai mille choses en tête au boulot, je ne peux pas retenir chaque micro-détail !",
      goodReaction: "Mince, pardonne-moi, ça m'est sorti de la tête. Rappelle-le moi, je le note tout de suite.",
      rule: "Admettez l'oubli simplement avec empathie sans chercher à accuser votre charge mentale."
    },
    {
      id: "v13",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Tu es tellement distant ces derniers temps...",
      literalMartian: "Tu ne m'aimes plus et tu prépares notre séparation en douce.",
      venusianMeaning: "Je sens que ton élastique s'est étiré et j'ai besoin de savoir que le lien entre nous est toujours solide.",
      badReaction: "Laisse-moi respirer cinq minutes ! Je n'ai même plus le droit d'être fatigué chez moi !",
      goodReaction: "Ne t'inquiète pas mon amour, j'ai juste un peu de fatigue à évacuer. Notre couple va très bien et je t'aime fort.",
      rule: "Rassurez-la en quelques mots doux sur votre amour avant de retourner à votre calme."
    },
    {
      id: "v14",
      category: "Langage Vénusien",
      speaker: "venus",
      phrase: "Je ne sais pas ce que j'ai aujourd'hui, j'ai envie de pleurer...",
      literalMartian: "Une catastrophe médicale ou un traumatisme grave vient de se produire et je dois trouver le remède.",
      venusianMeaning: "Ma vague est descendue dans le puits. C'est juste un trop-plein émotionnel qui a besoin de s'écouler dans tes bras.",
      badReaction: "Mais enfin, pourquoi tu pleures ? Donne-moi une raison valable, il ne s'est rien passé de grave !",
      goodReaction: "Viens là, pose ta tête sur mon épaule... Pleure tout ce que tu as besoin de pleurer, je te tiens fort.",
      rule: "N'exigez jamais d'explication logique à des larmes féminines. Offrez simplement votre épaule protectrice."
    },

    // MARS VERS VÉNUS (14 Expressions)
    {
      id: "m1",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Ça va. / Tout va bien.",
      literalVenusian: "Je te cache un lourd secret, je ne te fais pas confiance ou je te rejette.",
      martianMeaning: "Je suis en train de traiter une situation dans ma tête. Je n'ai pas besoin d'aide pour le moment et la situation est sous contrôle.",
      badReaction: "Non, je vois bien à ta tête que quelque chose cloche ! Tu ne me dis jamais rien, parle-moi !",
      goodReaction: "D'accord mon amour. Si tu as envie d'en parler plus tard, je suis là. Prends tout ton temps.",
      rule: "Faites confiance à sa capacité à gérer ses contrariétés. Quand il ne se sentira pas forcé, il s'ouvrira de lui-même."
    },
    {
      id: "m2",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Ce n'est pas grave. / Laisse tomber.",
      literalVenusian: "Ce problème est sans importance et tes sentiments sont futiles.",
      martianMeaning: "Ce contretemps ne mérite pas qu'on s'énerve ou qu'on s'inquiète. Je sais comment réparer ou contourner le problème sans drame.",
      badReaction: "Comment peux-tu dire que ce n'est pas grave ?! Tu te fiches de tout, c'est insupportable !",
      goodReaction: "Tu as raison, ne nous gâchons pas la soirée pour ça. Tu penses qu'on fait quoi du coup ?",
      rule: "L'homme minimise pour restaurer le calme et l'efficacité, pas pour mépriser vos émotions."
    },
    {
      id: "m3",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "[Le silence complet, absorbé par son écran ou son travail]",
      literalVenusian: "Il ne m'aime plus, il me rejette, je l'ennuie profondément.",
      martianMeaning: "Je suis entré dans ma caverne mentale pour recharger mes batteries et déconnecter mon cerveau.",
      badReaction: "Tu préfères regarder ta télé plutôt que de me parler ! Je compte pour du beurre ici ?",
      goodReaction: "[Lui laisser 30 à 45 minutes d'espace sans culpabilisation, vaquer sereinement à ses propres activités].",
      rule: "Le silence martien n'est pas une punition, c'est son sas d'oxygénation indispensable."
    },
    {
      id: "m4",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Je m'en occupe.",
      literalVenusian: "Il va oublier dans les cinq minutes et je vais devoir repasser derrière lui.",
      martianMeaning: "J'ai enregistré la tâche dans ma liste mentale de priorités et je la ferai à mon rythme selon mon plan.",
      badReaction: "Oui, comme d'habitude, tu dis ça et dans trois semaines ce ne sera toujours pas fait...",
      goodReaction: "Merci beaucoup, je compte sur toi, ça me soulage énormément.",
      rule: "La confiance stimule l'homme ; le doute et le rappel incessant le démotivent instantanément."
    },
    {
      id: "m5",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Laisse-moi tranquille !",
      literalVenusian: "Je te déteste, sors de ma vie pour toujours.",
      martianMeaning: "Je suis en surchauffe mentale complète dans ma caverne. Si tu insistes maintenant, mon Dragon va cracher du feu.",
      badReaction: "Comment oses-tu me parler sur ce ton ?! Je veux qu'on règle ça immédiatement !",
      goodReaction: "D'accord, je te laisse décompresser. On se retrouve tout à l'heure quand tu seras plus disponible.",
      rule: "Quand le Dragon martien rugit, battez immédiatement en retraite pour laisser la température redescendre."
    },
    {
      id: "m6",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Tu dramatises pour rien !",
      literalVenusian: "Tes sentiments sont stupides, tu es folle et hystérique.",
      martianMeaning: "Je panique face à l'intensité de tes émotions parce que je ne sais pas comment réparer le problème.",
      badReaction: "Je ne dramatise pas ! Tu n'as aucun cœur, tu es une pierre insensible !",
      goodReaction: "Mes émotions sont fortes en ce moment, mais je n'attends pas de solution miracle de ta part. J'ai juste besoin d'un câlin.",
      rule: "Rassurez-le : prévenez-le que vous n'attendez pas de lui qu'il 'répare' vos sentiments."
    },
    {
      id: "m7",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Qu'est-ce que tu veux que j'y fasse ?",
      literalVenusian: "Je me fiche éperdument de ton malheur, débrouille-toi toute seule.",
      martianMeaning: "Je me sens impuissant. Je cherche désespérément une solution technique dans ma tête et je n'en trouve aucune.",
      badReaction: "Je ne te demande pas de faire quelque chose, je te demande d'avoir du cœur !",
      goodReaction: "Tu n'as rien besoin de faire de spécial. Simplement m'écouter et me prendre dans tes bras m'aide déjà énormément.",
      rule: "L'impuissance martienne se manifeste par de l'irritation. Dites-lui exactement comment vous aider : par une écoute pure."
    },
    {
      id: "m8",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "C'est bon, j'ai compris !",
      literalVenusian: "Tais-toi, tes paroles m'insupportent et je n'en ai rien à faire.",
      martianMeaning: "Ton insistance me donne l'impression que tu me traites comme un enfant irresponsable ou incompétent.",
      badReaction: "Non, tu n'as pas compris, puisque la dernière fois tu as refait exactement la même bêtise !",
      goodReaction: "Parfait, je te fais confiance pour gérer ça à ta manière.",
      rule: "Dès qu'un homme dit 'J'ai compris', arrêtez immédiatement de répéter : le message est passé."
    },
    {
      id: "m9",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Dis-moi juste où tu veux en venir.",
      literalVenusian: "Tes bavardages sont ennuyeux et tu me fais perdre mon temps précieux.",
      martianMeaning: "Je suis perdu dans les détails émotionnels. Mon cerveau martien a besoin de la conclusion pour savoir quel problème résoudre.",
      badReaction: "Je ne veux en venir nulle part ! Je te raconte ma vie, c'est tout, mais ça ne t'intéresse pas !",
      goodReaction: "En deux mots : tout va bien finir, mais j'ai juste besoin de te raconter ce qui s'est passé avec ma collègue aujourd'hui.",
      rule: "Donnez d'abord la conclusion rassurante à un homme avant de dérouler les péripéties."
    },
    {
      id: "m10",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Tu n'as qu'à faire ceci et le problème est réglé !",
      literalVenusian: "Tais-toi maintenant que je t'ai donné la solution miracle.",
      martianMeaning: "Je t'aime et je souffre de te voir contrariée. En bon réparateur, je t'offre mon meilleur outil pour te soulager.",
      badReaction: "Tu crois vraiment que je n'y ai pas pensé toute seule ?! Tu me prends pour une idiote ?",
      goodReaction: "C'est une bonne idée pour plus tard, merci. Mais là tout de suite, j'ai juste besoin d'évacuer ma journée avec toi.",
      rule: "Accueillez son intention d'aide avec douceur, tout en précisant votre besoin d'écoute immédiate."
    },
    {
      id: "m11",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Je fais de mon mieux, rien ne te va jamais !",
      literalVenusian: "Tu es un monstre d'exigence ingrate, je regrette d'être avec toi.",
      martianMeaning: "Je me sens profondément blessé et inadéquat. J'ai l'impression d'échouer à te rendre heureuse quoi que je fasse.",
      badReaction: "Si tu faisais vraiment de ton mieux, on n'en serait pas là !",
      goodReaction: "Pardonne-moi mon chéri. Tu fais énormément pour nous et je l'apprécie immensément. C'est juste ce point précis qui me contrariait.",
      rule: "Rassurez immédiatement son besoin d'approbation : il a besoin de savoir qu'il n'a pas échoué à vos yeux."
    },
    {
      id: "m12",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Pourquoi tu me répètes ça pour la dixième fois ?",
      literalVenusian: "Tu es une harceleuse fatigante qui me pourrit l'existence.",
      martianMeaning: "Répéter me fait sentir que tu me juges paresseux ou indigne de confiance.",
      badReaction: "Parce que si je ne le répète pas 10 fois, rien ne bouge dans cette maison !",
      goodReaction: "Tu as raison, pardonne-moi d'avoir insisté. Je sais que tu t'en occuperas quand tu auras un moment.",
      rule: "Répéter détruit la motivation martienne. Laissez-lui l'espace d'agir selon son calendrier."
    },
    {
      id: "m13",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Je ne vois vraiment pas pourquoi tu te mets dans cet état.",
      literalVenusian: "Tes sentiments sont illégitimes, disproportionnés et ridicules.",
      martianMeaning: "Selon ma logique linéaire, ce fait ne justifie pas une telle douleur. Explique-moi le lien affectif que je ne perçois pas.",
      badReaction: "Tu ne vois rien parce que tu es aveugle à ce que je vis !",
      goodReaction: "Pour moi ce n'est pas juste un détail, c'est lié au fait que je me sens un peu délaissée en ce moment.",
      rule: "Expliquez la racine affective sous le fait concret, sans reproche."
    },
    {
      id: "m14",
      category: "Langage Martien",
      speaker: "mars",
      phrase: "Non. (Sec et direct)",
      literalVenusian: "Je refuse de t'aider parce que tes désirs n'ont aucune valeur pour moi.",
      martianMeaning: "Pour l'instant je n'ai pas l'énergie ou le temps de réaliser cette tâche.",
      badReaction: "D'accord, comme d'habitude, on ne peut jamais compter sur toi ! [Bouderie pendant 3 jours]",
      goodReaction: "D'accord, pas de souci mon chéri. Merci quand même !",
      rule: "Accepter un refus avec le sourire est le plus puissant levier pour qu'il dise un immense OUI la prochaine fois !"
    }
  ],

  // ==========================================
  // 3. LES 101 MOYENS DE MARQUER DES POINTS AUPRÈS D'UNE FEMME (LISTE OFFICIELLE COMPLÈTE)
  // ==========================================
  scoringList: [
    { id: 1, text: "En rentrant à la maison, allez immédiatement vers elle pour la serrer dans vos bras avant toute autre chose.", category: "Quotidien", points: 1 },
    { id: 2, text: "Demandez-lui comment s'est passée sa journée et écoutez-la pendant 10 minutes sans donner aucun conseil.", category: "Écoute", points: 1 },
    { id: 3, text: "Faites-lui une caresse ou un bisou tendre dans le cou sans attente sexuelle immédiate.", category: "Tendresse", points: 1 },
    { id: 4, text: "Apportez-lui une fleur surprise ou un petit bouquet sur le chemin du retour.", category: "Romantisme", points: 1 },
    { id: 5, text: "Remarquez sa nouvelle coiffure, son nouveau vêtement ou son parfum et faites-lui un compliment sincère.", category: "Attention", points: 1 },
    { id: 6, text: "Prévenez-la toujours à l'avance par message ou appel si vous allez avoir plus de 15 minutes de retard.", category: "Respect", points: 1 },
    { id: 7, text: "Préparez-lui son café, son thé ou son petit-déjeuner le matin sans qu'elle ait à le demander.", category: "Quotidien", points: 1 },
    { id: 8, text: "Proposez-lui spontanément un massage des pieds, des épaules ou du dos quand elle a l'air tendue.", category: "Tendresse", points: 1 },
    { id: 9, text: "Sortez les poubelles spontanément sans attendre qu'elles débordent ou qu'elle vous le rappelle.", category: "Maison", points: 1 },
    { id: 10, text: "Nettoyez la cuisine et faites la vaisselle après avoir cuisiné sans rien laisser dans l'évier.", category: "Maison", points: 1 },
    { id: 11, text: "Tenez-lui la main spontanément quand vous marchez dans la rue ou au centre commercial.", category: "Tendresse", points: 1 },
    { id: 12, text: "Planifiez une sortie ou réservez un restaurant à l'avance sans qu'elle ait à tout organiser elle-même.", category: "Romantisme", points: 1 },
    { id: 13, text: "Regardez-la droit dans les yeux quand elle parle, en posant immédiatement votre téléphone ou télécommande.", category: "Écoute", points: 1 },
    { id: 14, text: "Prenez son parti quand elle vous raconte un différend avec un tiers (au lieu de défendre le tiers !).", category: "Soutien", points: 1 },
    { id: 15, text: "Dites-lui 'Je t'aime' au moins deux fois par jour en la regardant avec tendresse.", category: "Romantisme", points: 1 },
    { id: 16, text: "Aidez-la à enfiler son manteau ou ouvrez-lui galamment la portière de la voiture.", category: "Respect", points: 1 },
    { id: 17, text: "Rapportez-lui sa friandise, son chocolat ou son dessert préféré en revenant des courses.", category: "Attention", points: 1 },
    { id: 18, text: "Demandez-lui avec bienveillance : 'Comment te sens-tu émotionnellement aujourd'hui ?'.", category: "Écoute", points: 1 },
    { id: 19, text: "Prenez les enfants en charge pendant une heure ou deux pour lui offrir un vrai moment de détente ou un bain.", category: "Soutien", points: 1 },
    { id: 20, text: "Exprimez votre fierté à son sujet devant des amis ou la famille.", category: "Attention", points: 1 },
    { id: 21, text: "Rabattez systématiquement la cuvette des toilettes sans qu'elle ait à faire de remarque.", category: "Maison", points: 1 },
    { id: 22, text: "Prenez sa défense avec délicatesse si quelqu'un la critique ou lui manque d'égard en société.", category: "Soutien", points: 1 },
    { id: 23, text: "Laissez-lui le choix du film, de la musique ou de l'activité du week-end avec un grand sourire.", category: "Attention", points: 1 },
    { id: 24, text: "Quand vous êtes dans votre caverne, dites-lui : 'J'ai juste besoin d'un peu de calme, je reviens vite, je t'aime'.", category: "Respect", points: 1 },
    { id: 25, text: "Laissez un petit mot doux manuscrit sur l'oreiller, le miroir de la salle de bain ou dans son sac à main.", category: "Romantisme", points: 1 },
    { id: 26, text: "Faites le plein d'essence de sa voiture ou vérifiez la pression de ses pneus sans qu'elle le demande.", category: "Soutien", points: 1 },
    { id: 27, text: "Lavez sa voiture à l'intérieur et à l'extérieur.", category: "Maison", points: 1 },
    { id: 28, text: "Demandez-lui si elle a froid et proposez-lui votre veste ou une couverture.", category: "Attention", points: 1 },
    { id: 29, text: "Proposez de porter les sacs lourds quand vous revenez des courses.", category: "Quotidien", points: 1 },
    { id: 30, text: "Appelez-la ou envoyez-lui un message affectueux au milieu de votre journée de travail juste pour savoir comment elle va.", category: "Attention", points: 1 },
    { id: 31, text: "Quand elle a cuisiné, complimentez chaleureusement le repas et remerciez-la.", category: "Quotidien", points: 1 },
    { id: 32, text: "Débarrassez la table immédiatement à la fin du repas.", category: "Maison", points: 1 },
    { id: 33, text: "Proposez d'aller faire les courses avec elle ou d'y aller à sa place.", category: "Soutien", points: 1 },
    { id: 34, text: "Embrassez-la tendrement avant de partir au travail le matin.", category: "Quotidien", points: 1 },
    { id: 35, text: "Riez de ses blagues ou de ses anecdotes avec enthousiasme.", category: "Attention", points: 1 },
    { id: 36, text: "Dites-lui 'Merci' avec sincérité quand elle vous rend un service, même minime.", category: "Respect", points: 1 },
    { id: 37, text: "Remarquez quand elle est fatiguée et incitez-la à aller se reposer pendant que vous gérez la maisonnée.", category: "Soutien", points: 1 },
    { id: 38, text: "Quand elle vous parle d'un problème avec sa mère ou une amie, compatissez sans faire de morale.", category: "Écoute", points: 1 },
    { id: 39, text: "Faites le lit le matin ou remettez les couettes en place.", category: "Maison", points: 1 },
    { id: 40, text: "Accueillez ses larmes sans paniquer ni lui demander de se calmer.", category: "Soutien", points: 1 },
    { id: 41, text: "Achetez-lui un petit cadeau sans occasion particulière, juste parce que vous avez pensé à elle.", category: "Romantisme", points: 1 },
    { id: 42, text: "Prenez une photo d'elle et dites-lui à quel point elle est ravissante.", category: "Attention", points: 1 },
    { id: 43, text: "Proposez une petite promenade romantique digestive le soir.", category: "Romantisme", points: 1 },
    { id: 44, text: "Quand vous êtes en voyage, rapportez-lui un souvenir personnel qui montre que vous pensiez à elle.", category: "Attention", points: 1 },
    { id: 45, text: "Retenez les dates importantes (anniversaire de rencontre, de mariage) sans qu'elle ait à vous les rappeler.", category: "Respect", points: 1 },
    { id: 46, text: "Réparez promptement un objet cassé dans la maison sans qu'elle ait à demander trois fois.", category: "Maison", points: 1 },
    { id: 47, text: "Mettez votre linge sale dans le panier à linge au lieu de le laisser par terre.", category: "Maison", points: 1 },
    { id: 48, text: "Écoutez ses chansons préférées en voiture même si ce n'est pas votre style musical favori.", category: "Attention", points: 1 },
    { id: 49, text: "Dites-lui qu'elle vous a manqué lorsque vous vous retrouvez après une absence.", category: "Tendresse", points: 1 },
    { id: 50, text: "Serrez-la contre vous pendant 30 secondes en silence quand vous sentez qu'elle est vulnérable.", category: "Tendresse", points: 1 },
    { id: 51, text: "Lui proposer de vérifier le niveau d'huile ou l'entretien de sa voiture sans attendre la panne.", category: "Soutien", points: 1 },
    { id: 52, text: "Quand elle vous parle, réprimer l'envie réflexe de consulter votre montre ou votre téléphone.", category: "Écoute", points: 1 },
    { id: 53, text: "Après avoir fait l'amour, rester blotti contre elle en la cajolant au lieu de vous endormir immédiatement.", category: "Tendresse", points: 1 },
    { id: 54, text: "Lui demander son avis sincère sur vos choix professionnels ou personnels.", category: "Respect", points: 1 },
    { id: 55, text: "Quand vous cuisinez ensemble, lui demander gentiment comment vous pouvez l'assister.", category: "Maison", points: 1 },
    { id: 56, text: "Lui offrir des fleurs pour célébrer une réussite professionnelle qui lui appartient.", category: "Romantisme", points: 1 },
    { id: 57, text: "Lui préparer un bon bain chaud avec des bougies après une journée stressante.", category: "Romantisme", points: 1 },
    { id: 58, text: "Lui faire livrer une fleur surprise sur son lieu de travail avec un mot tendre.", category: "Romantisme", points: 1 },
    { id: 59, text: "Éviter de critiquer sa conduite quand elle est au volant.", category: "Confiance", points: 1 },
    { id: 60, text: "Proposer de prendre une belle photo d'elle ou de vous deux lors d'un moment agréable.", category: "Attention", points: 1 },
    { id: 61, text: "Lui resservir de l'eau fraîche dans son verre sans qu'elle ait à le demander.", category: "Quotidien", points: 1 },
    { id: 62, text: "Ne pas zapper continuellement les chaînes quand vous regardez un film ensemble.", category: "Respect", points: 1 },
    { id: 63, text: "Prendre le temps de saluer chaleureusement ses amies ou sa famille.", category: "Attention", points: 1 },
    { id: 64, text: "Lui tendre un mouchoir avec délicatesse quand elle est émue ou qu'elle pleure.", category: "Tendresse", points: 1 },
    { id: 65, text: "Préparer le thé ou l'infusion du soir pour vous deux avant d'aller au lit.", category: "Quotidien", points: 1 },
    { id: 66, text: "Quand elle revient des courses, l'aider immédiatement à décharger et ranger les placards.", category: "Maison", points: 1 },
    { id: 67, text: "Baisser le volume de la télévision ou de votre musique dès qu'elle reçoit un appel téléphonique.", category: "Respect", points: 1 },
    { id: 68, text: "Lui demander comment s'est passée sa visite chez le médecin ou son rendez-vous important.", category: "Écoute", points: 1 },
    { id: 69, text: "Lui apporter le petit-déjeuner au lit le week-end avec un mot affectueux.", category: "Romantisme", points: 1 },
    { id: 70, text: "Lui masser doucement le cuir chevelu ou les tempes quand elle a mal à la tête.", category: "Tendresse", points: 1 },
    { id: 71, text: "Laisser un post-it avec un cœur sur son volant avant qu'elle ne parte au travail.", category: "Romantisme", points: 1 },
    { id: 72, text: "Organiser une garde d'enfants pour lui offrir une vraie soirée surprise en tête-à-tête.", category: "Romantisme", points: 1 },
    { id: 73, text: "Prendre spontanément des nouvelles de ses parents ou de ses proches.", category: "Attention", points: 1 },
    { id: 74, text: "Ranger vos chaussures, manteau et clés dès que vous rentrez à la maison.", category: "Maison", points: 1 },
    { id: 75, text: "Lui préparer une place confortable sur le canapé avec un plaid quand vous regardez un film.", category: "Tendresse", points: 1 },
    { id: 76, text: "Accueillir ses inquiétudes sans lui dire 'Tu t'angoisses pour des bêtises'.", category: "Écoute", points: 1 },
    { id: 77, text: "Faire un compromis avec le sourire sans le lui reprocher les jours suivants.", category: "Respect", points: 1 },
    { id: 78, text: "Lui proposer de prendre le volant si le trajet est long et qu'elle semble fatiguée.", category: "Soutien", points: 1 },
    { id: 79, text: "Vérifier que les portes et fenêtres sont bien fermées pour qu'elle se sente en sécurité le soir.", category: "Attention", points: 1 },
    { id: 80, text: "Lui envoyer un texto juste pour lui dire : 'Je pensais à toi, tu me manques'.", category: "Romantisme", points: 1 },
    { id: 81, text: "Lui dire qu'elle sent délicieusement bon quand vous la prenez dans vos bras.", category: "Attention", points: 1 },
    { id: 82, text: "S'abstenir de trancher sèchement quand elle hésite entre deux vêtements, chercher à la valoriser.", category: "Écoute", points: 1 },
    { id: 83, text: "Patienter avec le sourire quand elle se prépare sans crier 'On va être en retard !'.", category: "Respect", points: 1 },
    { id: 84, text: "Prendre son manteau et l'accrocher au vestiaire quand vous rentrez d'une soirée.", category: "Quotidien", points: 1 },
    { id: 85, text: "Quand elle oublie quelque chose, dédramatiser immédiatement : 'Ce n'est rien du tout, on va s'arranger'.", category: "Soutien", points: 1 },
    { id: 86, text: "Lui proposer de choisir le restaurant pour votre prochaine sortie en amoureux.", category: "Attention", points: 1 },
    { id: 87, text: "Lui faire un câlin surprise par derrière avec un bisou dans le cou pendant qu'elle s'active.", category: "Tendresse", points: 1 },
    { id: 88, text: "Prendre l'initiative de promener le chien ou de nettoyer la litière sans qu'elle ait à le demander.", category: "Maison", points: 1 },
    { id: 89, text: "Quand elle vous pose une question, interrompre votre tâche 10 secondes pour lui répondre les yeux dans les yeux.", category: "Respect", points: 1 },
    { id: 90, text: "Lui rapporter un magazine, un livre ou une gourmandise en lien avec sa passion actuelle.", category: "Attention", points: 1 },
    { id: 91, text: "Tenir le parapluie au-dessus d'elle pour qu'elle soit parfaitement protégée de la pluie.", category: "Respect", points: 1 },
    { id: 92, text: "Rincer et essuyer le lavabo après vous être rasé ou lavé les dents.", category: "Maison", points: 1 },
    { id: 93, text: "Lui proposer une pause thé ou café au milieu de sa journée de travail à la maison.", category: "Quotidien", points: 1 },
    { id: 94, text: "Quand vous êtes chez des amis, lui envoyer des regards complices et tendres à travers la pièce.", category: "Romantisme", points: 1 },
    { id: 95, text: "Céder sur un détail sans vouloir avoir le dernier mot à tout prix.", category: "Respect", points: 1 },
    { id: 96, text: "Lui apporter une bouillotte bien chaude en hiver quand elle a froid aux pieds.", category: "Tendresse", points: 1 },
    { id: 97, text: "Lui murmurer à l'oreille qu'elle est la plus belle femme de la soirée.", category: "Romantisme", points: 1 },
    { id: 98, text: "Valoriser son rôle et sa présence au sein du foyer devant les enfants.", category: "Attention", points: 1 },
    { id: 99, text: "Si une tension éclate, lui dire : 'Je suis contrarié mais je t'aime toujours, nous allons surmonter ça'.", category: "Soutien", points: 1 },
    { id: 100, text: "L'aider à porter ou charger ses bagages dans la voiture sans qu'elle ait à demander.", category: "Soutien", points: 1 },
    { id: 101, text: "L'embrasser passionnément sur la bouche avec fougue, exactement comme au premier jour de votre rencontre.", category: "Romantisme", points: 1 }
  ],

  // ==========================================
  // 4. COMMENT UNE FEMME MARQUE DES POINTS AUPRÈS D'UN HOMME (RÈGLES MARTIENNES)
  // ==========================================
  marsScoringList: [
    { id: "m_pt1", text: "Quand il se trompe de route en voiture, rester détendue sans lui faire de remarque ni soupirer.", category: "Confiance", points: 10 },
    { id: "m_pt2", text: "Ne pas lui donner de conseil non sollicité quand il répare quelque chose ou accomplit une tâche.", category: "Acceptation", points: 10 },
    { id: "m_pt3", text: "L'accueillir avec chaleur et tendresse quand il sort de sa caverne, sans lui demander de comptes.", category: "Acceptation", points: 10 },
    { id: "m_pt4", text: "Quand il dit 'non' à une demande, accepter son refus avec le sourire sans bouder ni punir.", category: "Respect", points: 15 },
    { id: "m_pt5", text: "Lui exprimer une admiration sincère pour ses compétences, son courage ou ses réussites professionnelles.", category: "Admiration", points: 10 },
    { id: "m_pt6", text: "Lui dire : 'J'ai confiance en toi, je sais que tu vas réussir à régler ce problème'.", category: "Confiance", points: 10 },
    { id: "m_pt7", text: "Remarquer ce qu'il a fait pour la maison et lui dire un vrai 'Merci mon chéri' sans mentionner ce qu'il a oublié.", category: "Appréciation", points: 10 },
    { id: "m_pt8", text: "Lui faire une demande courte et directe avec 'Pourrais-tu...', sans justification défensive.", category: "Encouragement", points: 5 },
    { id: "m_pt9", text: "Lui laisser 30 à 45 minutes de décompression totale à son retour du travail sans lui sauter dessus.", category: "Respect", points: 10 },
    { id: "m_pt10", text: "Lui faire savoir que vous êtes heureuse à ses côtés et qu'il fait votre bonheur.", category: "Approbation", points: 15 }
  ],

  // ==========================================
  // 5. LES 6 PAIRES DE BESOINS ÉMOTIONNELS PRIMAIRES (CHAPITRE 8)
  // ==========================================
  emotionalNeeds: [
    {
      venusNeed: "1. Attention & Soin (Caring)",
      venusDesc: "Elle a besoin qu'il s'intéresse sincèrement à son bien-être, à ses petits détails du quotidien et à ses ressentis.",
      marsNeed: "1. Confiance (Trust)",
      marsDesc: "Il a besoin qu'elle croie en ses capacités, qu'elle soit convaincue qu'il fait de son mieux et qu'il est capable de réussir.",
      synergy: "Quand un homme témoigne de l'attention à sa femme, elle s'épanouit et lui accorde naturellement sa confiance. Quand elle lui fait confiance, il a envie de prendre encore plus soin d'elle."
    },
    {
      venusNeed: "2. Compréhension (Understanding)",
      venusDesc: "Elle a besoin d'être écoutée sans jugement ni tentative de réfutation logique de ce qu'elle éprouve.",
      marsNeed: "2. Acceptation (Acceptance)",
      marsDesc: "Il a besoin d'être aimé tel qu'il est, sans tentative de le rééduquer, de le corriger ou de le changer.",
      synergy: "Quand un homme écoute pour comprendre plutôt que pour contredire, la femme se sent comprise et cesse immédiatement de le critiquer pour l'accepter tel qu'il est."
    },
    {
      venusNeed: "3. Respect (Respect)",
      venusDesc: "Elle a besoin que ses désirs, ses sentiments et ses droits soient reconnus comme prioritaires et précieux.",
      marsNeed: "3. Appréciation (Appreciation)",
      marsDesc: "Il a besoin qu'elle remarque et valorise ce qu'il accomplit pour elle et pour le foyer au quotidien.",
      synergy: "Quand l'homme montre du respect (fleurs, ponctualité, délicatesse), la femme ressent une immense gratitude et lui exprime une vive appréciation qui le galvanise."
    },
    {
      venusNeed: "4. Dévouement (Devotion)",
      venusDesc: "Elle a besoin de se sentir la numéro un dans son cœur, chérie et placée au centre de ses priorités.",
      marsNeed: "4. Admiration (Admiration)",
      marsDesc: "Il a besoin d'être regardé avec fierté pour ses talents, son courage, son humour et son intégrité.",
      synergy: "Quand l'homme se dévoue pour la rendre heureuse, la femme le regarde avec des yeux remplis d'admiration, ce qui est le carburant suprême de la masculinité martienne."
    },
    {
      venusNeed: "5. Validation (Validation)",
      venusDesc: "Elle a besoin qu'on lui confirme que ses émotions sont tout à fait légitimes et normales.",
      marsNeed: "5. Approbation (Approval)",
      marsDesc: "Il a besoin de savoir que sa compagne est satisfaite de lui et qu'il est un 'bon partenaire' à ses yeux.",
      synergy: "En validant les émotions de sa partenaire sans discuter, l'homme obtient en retour son approbation chaleureuse."
    },
    {
      venusNeed: "6. Rassurance (Reassurance)",
      venusDesc: "Elle a besoin d'être rassurée encore et encore sur le fait qu'elle est toujours aimée et jamais abandonnée.",
      marsNeed: "6. Encouragement (Encouragement)",
      marsDesc: "Il a besoin qu'elle soutienne ses initiatives avec enthousiasme, espérance et foi en l'avenir.",
      synergy: "Un homme qui rassure constamment sa femme reçoit des encouragements constants pour affronter le monde extérieur."
    }
  ],

  // ==========================================
  // 6. LES 4 POSTURES DÉFENSIVES DANS LES DISPUTES (CHAPITRE 9)
  // ==========================================
  defensiveStances: [
    {
      name: "1. L'Attaque (Le Dragon Martien)",
      motto: "« La meilleure défense, c'est l'attaque ! »",
      behavior: "Élever la voix, accuser, couper la parole, utiliser le sarcasme, intimider pour forcer l'autre à capituler.",
      damage: "Détruit la sécurité affective et crée un climat de terreur ou de ressentiment profond.",
      remedy: "Prendre conscience de la montée de l'agressivité et imposer immédiatement un 'Time-Out' de 20 minutes pour faire baisser le cortisol."
    },
    {
      name: "2. La Fuite (La Caverne Glaciale)",
      motto: "« Je refuse d'en entendre davantage, je disparais. »",
      behavior: "Clap de fin immédiat, claquer la porte, punir par le silence méprisant pendant des heures ou des jours.",
      damage: "Déclenche chez la femme la pire angoisse vénusienne : l'abandon et le rejet glacial.",
      remedy: "Partir en rassurant : 'Je suis trop en colère pour parler sereinement, je prends l'air 30 minutes mais je reviens vers toi car je t'aime'."
    },
    {
      name: "3. La Feinte (Le Comédien)",
      motto: "« Tout va très bien, il n'y a aucun problème. »",
      behavior: "Sourire en façade, refouler ses émotions négatives, capituler faussement pour acheter la paix temporaire.",
      damage: "La rancœur s'accumule sous le tapis comme une bombe à retardement, tuant la passion et le désir sexuel.",
      remedy: "S'autoriser à exprimer son mécontentement avec délicatesse grâce à la méthode de la Lettre d'Amour."
    },
    {
      name: "4. La Capitulation (La Victime)",
      motto: "« C'est bon, c'est entièrement de ma faute, je suis nul(le). »",
      behavior: "S'écraser, endosser toute la culpabilité, déprimer, adopter une posture d'impuissance totale.",
      damage: "Crée une dynamique toxique dominant/dominé et éteint tout respect mutuel dans le couple.",
      remedy: "Reconnaître sa part de responsabilité sans s'auto-dénigrer, et faire respecter ses limites avec fermeté bienveillante."
    }
  ],

  // ==========================================
  // 7. L'ART DE DEMANDER DU SOUTIEN ET DE L'OBTENIR (CHAPITRE 12)
  // ==========================================
  askingSupportGuide: {
    ruleTitle: "Les 5 Clés d'Or pour Demander du Soutien sans Déclencher de Résistance",
    rules: [
      {
        num: 1,
        title: "Le Timing Parfait",
        desc: "Ne demandez JAMAIS un service lorsqu'il est profondément absorbé dans sa caverne, devant un écran ou en plein stress. Attendez un moment de disponibilité détendue."
      },
      {
        num: 2,
        title: "La Brièveté & La Clarté",
        desc: "Soyez directe et concise. Les justifications interminables ('Parce que j'ai fait ceci, et puis ensuite il faut que...') sonnent pour un Martien comme des reproches déguisés sur ce qu'il n'a pas fait."
      },
      {
        num: 3,
        title: "La Formule Magique : 'Pourrais-tu' au lieu de 'Peux-tu'",
        desc: "Pour un homme, 'Peux-tu sortir les poubelles ?' est une mise en cause de sa capacité physique ou un ordre autoritaire. 'Pourrais-tu sortir les poubelles s'il te plaît ?' est une requête polie qui fait appel à sa générosité."
      },
      {
        num: 4,
        title: "L'Absence Totale de Reproche",
        desc: "Demandez sans sous-entendre qu'il aurait dû le deviner tout seul. Les hommes ne devinent pas les pensées, ils réagissent aux demandes claires."
      },
      {
        num: 5,
        title: "Le Droit Absolu au Refus",
        desc: "Si sa réponse est 'Non, pas maintenant', accueillez-la avec le sourire ('D'accord, pas de souci mon chéri !'). Quand un homme sait qu'un refus n'entraîne aucune punition émotionnelle (bouderie, froideur), il devient infiniment enclin à dire OUI la fois suivante !"
      }
    ]
  },

  // ==========================================
  // 8. LES 4 SAISONS DE L'AMOUR (CHAPITRE 13)
  // ==========================================
  seasons: [
    {
      name: "Le Printemps de l'Amour",
      icon: "🌱",
      state: "La Passion & La Renaissance",
      desc: "L'amour semble magique, spontané et parfait. Nous ne voyons que les qualités de l'autre et croyons que tout sera facile.",
      advice: "Savourez cette saison sans tomber dans l'illusion qu'elle durera toujours sans effort conscient."
    },
    {
      name: "L'Été de l'Amour",
      icon: "☀️",
      state: "Le Travail & Les Réglages",
      desc: "Nos différences martiennes et vénusiennes apparaissent au grand jour. Les premières frustrations émergent.",
      advice: "C'est la saison de l'apprentissage : appliquez la bienveillance, découvrez les besoins primaires de l'autre et cultivez le pardon."
    },
    {
      name: "L'Automne de l'Amour",
      icon: "🍁",
      state: "La Récolte & La Complicité",
      desc: "Après avoir appris à respecter nos différences, nous récoltons les fruits d'un amour mûr, apaisé et profondément complice.",
      advice: "Célébrez votre équipe de couple et exprimez une profonde gratitude pour le chemin parcouru ensemble."
    },
    {
      name: "L'Hiver de l'Amour",
      icon: "❄️",
      state: "L'Introspection & Le Repos",
      desc: "Le froid s'installe temporairement. L'énergie amoureuse retombe, chacun ressent le besoin de se retrouver avec soi-même.",
      advice: "Ne paniquez pas et ne parlez pas de rupture ! L'hiver est un temps de repos biologique nécessaire avant le renouveau printanier."
    }
  ],

  // ==========================================
  // 9. ÉTAPES DE LA LETTRE D'AMOUR (CHAPITRE 11)
  // ==========================================
  loveLetterSteps: [
    {
      step: 1,
      name: "Colère & Blâme",
      title: "1. Colère & Blâme (Ce qui me met en colère)",
      subtitle: "Exprimer sans censure le ressentiment brut pour vider l'abcès",
      starters: [
        "Je n'aime pas quand tu...",
        "Je suis en colère parce que...",
        "J'en ai assez de...",
        "Ça m'énerve profondément que...",
        "Je refuse d'accepter que..."
      ],
      placeholder: "Exemple : Je suis très en colère que tu aies annulé notre dîner à la dernière minute sans même t'excuser. J'ai l'impression que ton travail passe toujours avant notre couple..."
    },
    {
      step: 2,
      name: "Tristesse & Déception",
      title: "2. Tristesse & Déception (Ce qui me blesse)",
      subtitle: "Passer sous la colère pour révéler la vulnérabilité et la douleur",
      starters: [
        "Ça me fait de la peine quand...",
        "Je suis triste parce que...",
        "Je me sens tellement déçu(e) que...",
        "J'ai mal au cœur quand je vois que...",
        "Je me sens blessé(e) par..."
      ],
      placeholder: "Exemple : Ça m'a fait énormément de peine, car je me réjouissais de cette soirée avec toi toute la semaine. Je me suis sentie rejetée et sans importance à tes yeux..."
    },
    {
      step: 3,
      name: "Peur & Insécurité",
      title: "3. Peur & Insécurité (Ce qui m'inquiète)",
      subtitle: "Révéler les angoisses profondes cachées derrière la tristesse",
      starters: [
        "J'ai peur que...",
        "Mon angoisse est que...",
        "Je crains que nous...",
        "J'ai peur de ne plus compter pour toi...",
        "Je m'inquiète pour..."
      ],
      placeholder: "Exemple : J'ai peur que la routine prenne le dessus et que tu perdes l'intérêt que tu avais pour moi au début. J'ai peur qu'on s'éloigne peu à peu sans s'en rendre compte..."
    },
    {
      step: 4,
      name: "Regret & Responsabilité",
      title: "4. Regret & Responsabilité (Ce pour quoi je m'excuse)",
      subtitle: "Reconnaître sa propre part et désamorcer la guerre des égos",
      starters: [
        "Je regrette d'avoir...",
        "Je suis désolé(e) si j'ai...",
        "Pardonne-moi pour mon agressivité quand...",
        "Je reconnais que j'ai mal réagi en...",
        "J'aurais dû..."
      ],
      placeholder: "Exemple : Je regrette d'avoir réagi avec froideur et d'avoir boudé hier soir au lieu de te parler calmement. Je suis désolée de t'avoir fait des reproches sur un ton accusateur..."
    },
    {
      step: 5,
      name: "Amour, Pardon & Souhaits",
      title: "5. Amour, Pardon & Vœux (Ce que je désire)",
      subtitle: "Revenir à l'amour véritable et formuler une demande claire et constructive",
      starters: [
        "Je t'aime parce que...",
        "Ce que je souhaite du fond du cœur, c'est...",
        "J'aimerais tellement que nous...",
        "Je te pardonne pour...",
        "Merci d'être là pour moi..."
      ],
      placeholder: "Exemple : Je t'aime profondément et je tiens immensément à notre relation. Ce que j'aimerais, c'est qu'on se planifie une nouvelle soirée ce vendredi, et qu'on prenne un moment pour se faire un vrai câlin ce soir..."
    }
  ],

  // ==========================================
  // 10. SCÉNARIOS RÉALISTES DE SIMULATION (6 CAS)
  // ==========================================
  scenarios: [
    {
      id: "sc1",
      title: "Le retour du travail : fatigue et décompression",
      situation: "Julien rentre du travail après une journée harassante où son patron lui a mis une pression folle. Sophie a elle aussi passé une journée épuisante avec les enfants et les dossiers. Julien s'assoit en silence sur le canapé et allume la télévision sans dire un mot. Sophie arrive dans le salon et commence à lui raconter avec agitation tous les problèmes de sa journée.",
      question: "Quelle est la meilleure approche selon les principes de Mars et Vénus ?",
      options: [
        {
          id: "A",
          text: "Sophie insiste : 'Tu pourrais au moins me dire bonjour et m'écouter au lieu de regarder des bêtises à la télé !'",
          verdict: "Mauvais réflexe Vénusien",
          analysis: "Sophie pourchasse Julien dans sa caverne. Julien, déjà saturé, va se fermer encore plus ou exploser (réaction du Dragon). Sophie se sentira rejetée.",
          points: 0
        },
        {
          id: "B",
          text: "Julien saute sur ses pieds et donne 4 solutions rapides : 'Demain appelle la nounou, dis non à ton collègue et commande une pizza.'",
          verdict: "Piège de Monsieur Réparateur",
          analysis: "Julien veut expédier le problème avec des solutions logiques. Sophie ne se sent absolument pas écoutée ni soutenue dans son ressenti émotionnel.",
          points: 0
        },
        {
          id: "C",
          text: "Gagnant-Gagnant : Julien prend 2 minutes pour serrer Sophie dans ses bras et lui dit : 'J'ai eu une journée folle, j'ai besoin de 20 minutes pour vider ma tête dans ma caverne, puis je serai tout à toi pour t'écouter.' Sophie accepte avec le sourire et le laisse décompresser.",
          verdict: "Harmonie Martienne-Vénusienne parfaite",
          analysis: "Julien rassure Sophie sur son amour avant d'entrer dans sa caverne (évite le sentiment d'abandon). Sophie respecte son besoin d'isolement sans en faire une affaire personnelle. Résultat : Julien ressort ressourcé et disponible pour écouter Sophie !",
          points: 10
        }
      ]
    },
    {
      id: "sc2",
      title: "Sur la route : la recherche d'itinéraire",
      situation: "Thomas et Émilie se rendent à un dîner de mariage en voiture. Thomas s'est visiblement trompé de sortie d'autoroute et tourne en rond depuis 15 minutes. Émilie commence à s'impatienter car ils vont être en retard.",
      question: "Comment désamorcer la tension dans la voiture ?",
      options: [
        {
          id: "A",
          text: "Émilie : 'Arrête-toi à la station-service et demande ton chemin, ou alors passe-moi le téléphone, tu ne sais jamais où tu vas !'",
          verdict: "Piège du Comité d'Amélioration du Foyer",
          analysis: "Pour un Martien, donner un conseil non sollicité sur sa conduite ou son sens de l'orientation est une attaque frontale contre sa compétence et son autonomie. Thomas va se braquer violemment.",
          points: 0
        },
        {
          id: "B",
          text: "Émilie reste sereine et dit avec douceur : 'Ne t'en fais pas pour le retard, nous finirons bien par arriver. Veux-tu que je regarde le GPS sur mon téléphone ou tu préfères chercher ?'",
          verdict: "Attitude Vénusienne éclairée",
          analysis: "Émilie fait confiance à Thomas, dédramatise la situation et lui propose son aide comme un choix sans porter de jugement sur ses capacités. Thomas se sent respecté et accepté.",
          points: 10
        },
        {
          id: "C",
          text: "Thomas crie : 'C'est de ta faute, tu m'as parlé au moment où je devais tourner !' et accélère brusquement.",
          verdict: "Réflexe défensif agressif de Mars",
          analysis: "Thomas a honte de s'être trompé et projette sa culpabilité sur sa compagne pour préserver son ego martien. C'est le début d'une dispute toxique.",
          points: 0
        }
      ]
    },
    {
      id: "sc3",
      title: "Le creux de la vague (Le Puits)",
      situation: "Depuis deux jours, Clara est triste, silencieuse, se trouve 'laide' et dit à Marc : 'De toute façon notre vie est nulle, rien ne va, on ne construit rien ensemble.' Marc tombe des nues car ils viennent de passer un excellent week-end.",
      question: "Que doit faire Marc pour aider Clara sans aggraver la situation ?",
      options: [
        {
          id: "A",
          text: "Marc argumente : 'Mais enfin tu es ingrate ! On a passé un super week-end, on a une belle maison, tout va très bien, pourquoi tu te plains tout le temps ?'",
          verdict: "Invalidation logique martienne",
          analysis: "Marc essaie d'empêcher la vague de descendre par la logique. Clara se sent incomprise, coupable et s'enfonce encore plus profondément dans le puits.",
          points: 0
        },
        {
          id: "B",
          text: "Marc prend peur, croit que Clara ne l'aime plus et claque la porte en disant : 'Si c'est comme ça, je te laisse dans tes délires.'",
          verdict: "Fuite et abandon",
          analysis: "Clara ressent la pire peur vénusienne : l'abandon au moment où elle a le plus besoin d'un socle d'amour inconditionnel.",
          points: 0
        },
        {
          id: "C",
          text: "Marc s'assoit près d'elle, la prend dans ses bras, valide son émotion sans se justifier : 'Je vois que tu te sens triste et dépassée en ce moment. Je suis là avec toi, tu n'es pas toute seule.'",
          verdict: "Le phare dans la tempête",
          analysis: "Marc offre une présence sécurisante sans chercher à 'réparer' l'émotion. Clara pleure un bon coup, se sent accueillie dans sa vulnérabilité, et sa vague remonte naturellement vers la lumière !",
          points: 10
        }
      ]
    },
    {
      id: "sc4",
      title: "La charge mentale et les corvées du foyer",
      situation: "Samedi matin, la maison est en désordre. Léa commence à nettoyer en soupirant bruyamment et en rangeant avec fracas. Romain est assis sur le canapé en train de lire ses messages, sans réagir.",
      question: "Comment éviter que cette matinée ne se transforme en guerre ouverte ?",
      options: [
        {
          id: "A",
          text: "Léa explose : 'C'est toujours pareil dans cette maison, monsieur attend qu'on le serve ! Tu ne pourrais pas lever tes fesses ?!'",
          verdict: "Exigence amère et culpabilisatrice",
          analysis: "Léa a attendu qu'il devine sans formuler de demande directe. L'attaque culpabilisatrice braque Romain qui va refuser d'aider par principe de fierté martienne.",
          points: 0
        },
        {
          id: "B",
          text: "Romain dit : 'Si tu es fatiguée, ne fais rien, laisse le bazar !' et continue de regarder son téléphone.",
          verdict: "Incompréhension de Monsieur Réparateur",
          analysis: "Romain pense donner une solution logique, mais pour Léa, vivre dans le désordre amplifie son anxiété. Elle se sent totalement abandonnée.",
          points: 0
        },
        {
          id: "C",
          text: "Léa s'approche avec douceur : 'Romain, pourrais-tu passer l'aspirateur dans le salon pendant que je m'occupe des chambres s'il te plaît ? Ça me soulagerait énormément.' Romain accepte avec plaisir.",
          verdict: "L'art de la demande selon le Chapitre 12",
          analysis: "Léa fait une demande brève, directe, sans reproche passé, avec 'Pourrais-tu'. Romain se sent valorisé et utile. Harmonie préservée !",
          points: 10
        }
      ]
    },
    {
      id: "sc5",
      title: "En société : la remarque maladroite",
      situation: "Lors d'un dîner chez des amis, Maxime raconte une anecdote amusante mais se trompe sur un détail. Valérie l'interrompt devant tout le monde : 'Mais non, ce n'était pas à Lyon, c'était à Marseille, tu mélanges toujours tout !'",
      question: "Pourquoi Maxime se ferme-t-il pour le reste de la soirée et comment réparer ?",
      options: [
        {
          id: "A",
          text: "Valérie en rajoute : 'Arrête de faire la tête Maxime, on a le droit de rectifier une bêtise !'",
          verdict: "Humiliation publique martienne",
          analysis: "Corriger un homme publiquement est une atteinte directe à son besoin primordial de fierté et d'admiration. Maxime se retire dans sa caverne avec rancœur.",
          points: 0
        },
        {
          id: "B",
          text: "Maxime commence à disputer Valérie devant les amis pour prouver qu'il a raison.",
          verdict: "Combat de coqs destructeur",
          analysis: "L'escalade d'ego en public met les amis mal à l'aise et laisse une trace toxique durable dans le couple.",
          points: 0
        },
        {
          id: "C",
          text: "Valérie prend discrètement la main de Maxime sous la table avec un regard complice : 'Pardonne-moi mon cœur, continue, ton histoire est géniale.' Et Maxime reprend le fil avec le sourire.",
          verdict: "Restauration immédiate de l'admiration",
          analysis: "Valérie comprend que la fierté martienne a été effleurée et répare instantanément le lien par un geste d'admiration et de soutien.",
          points: 10
        }
      ]
    },
    {
      id: "sc6",
      title: "L'intimité et le désir amoureux",
      situation: "Le soir au lit, Paul fait des avances à Sarah. Sarah est exténuée par sa semaine et ne ressent pas de désir immédiat ce soir-là.",
      question: "Comment gérer ce moment avec amour selon John Gray ?",
      options: [
        {
          id: "A",
          text: "Sarah le repousse sèchement : 'Tu ne penses qu'à ça, tu es vraiment un obsédé !'",
          verdict: "Rejet blessant du besoin d'approbation",
          analysis: "L'homme exprime souvent son amour et sa vulnérabilité à travers la sexualité. Ce rejet agressif est vécu par Paul comme un rejet de sa personne entière.",
          points: 0
        },
        {
          id: "B",
          text: "Sarah se force avec réticence et passivité en soupirant.",
          verdict: "Faux don générateur de ressentiment",
          analysis: "Se forcer détruit l'épanouissement intime à long terme et Paul sentira son absence de plaisir, ce qui le blessera également.",
          points: 0
        },
        {
          id: "C",
          text: "Sarah le serre tendrement dans ses bras : 'Mon amour, j'adore quand tu as envie de moi, mais je suis vidée d'énergie ce soir. Est-ce qu'on peut juste se faire un gros câlin tout chaud contre toi ?' Paul accepte avec tendresse.",
          verdict: "Rassurance et affection partagée",
          analysis: "Sarah valide l'attirance de Paul (nourrit son besoin d'être désiré) tout en posant sa limite avec amour. Paul ne se sent pas rejeté et offre une tendresse pure.",
          points: 10
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MARS_VENUS_DATA;
}
