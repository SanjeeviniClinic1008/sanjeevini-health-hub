import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Apple, 
  Droplet, 
  Heart, 
  Salad, 
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DietCharts = () => {
  const diabetesDiet = {
    recommendations: [
      "Choose whole grains over refined grains",
      "Include lean proteins in every meal",
      "Eat plenty of non-starchy vegetables",
      "Limit sugary foods and beverages",
      "Monitor portion sizes carefully",
      "Eat at regular intervals",
    ],
    breakfast: [
      "Oatmeal with nuts and berries",
      "Whole wheat toast with egg whites",
      "Vegetable upma with low-fat yogurt",
      "Sprouts salad with lemon",
    ],
    lunch: [
      "Brown rice with dal and vegetables",
      "Whole wheat roti with chicken/fish",
      "Quinoa salad with grilled vegetables",
      "Mixed vegetable curry with roti",
    ],
    dinner: [
      "Grilled fish with steamed vegetables",
      "Vegetable soup with whole grain bread",
      "Moong dal khichdi with cucumber raita",
      "Chicken salad with olive oil dressing",
    ],
    snacks: [
      "Handful of almonds or walnuts",
      "Apple slices with peanut butter",
      "Roasted chickpeas",
      "Low-fat Greek yogurt",
    ],
    avoid: [
      "White bread and rice",
      "Sugary drinks and desserts",
      "Fried foods",
      "Processed snacks",
      "Full-fat dairy products",
    ],
  };

  const hypertensionDiet = {
    recommendations: [
      "Reduce sodium intake (less than 2300mg/day)",
      "Increase potassium-rich foods",
      "Choose low-fat dairy products",
      "Eat plenty of fruits and vegetables",
      "Limit alcohol consumption",
      "Maintain healthy weight",
    ],
    breakfast: [
      "Banana smoothie with low-fat milk",
      "Oats porridge with berries",
      "Whole grain toast with avocado",
      "Poha with vegetables (low salt)",
    ],
    lunch: [
      "Grilled chicken with brown rice",
      "Fish curry with minimal salt",
      "Lentil soup with whole wheat roti",
      "Vegetable pulao with raita",
    ],
    dinner: [
      "Steamed vegetables with quinoa",
      "Grilled salmon with sweet potato",
      "Mixed dal with cucumber salad",
      "Vegetable stir-fry with brown rice",
    ],
    snacks: [
      "Fresh fruits (banana, orange, apple)",
      "Unsalted nuts",
      "Carrot and cucumber sticks",
      "Low-fat yogurt",
    ],
    avoid: [
      "Processed and canned foods",
      "Pickles and papad",
      "Salty snacks and chips",
      "Excessive caffeine",
      "High-sodium condiments",
    ],
  };

  const generalHealth = {
    recommendations: [
      "Eat a balanced diet with all food groups",
      "Stay hydrated (8-10 glasses of water)",
      "Include variety of colorful vegetables",
      "Choose healthy cooking methods",
      "Limit processed foods",
      "Practice mindful eating",
    ],
    breakfast: [
      "Whole grain cereal with milk and fruits",
      "Idli/dosa with sambar and chutney",
      "Egg omelet with whole wheat toast",
      "Fresh fruit smoothie with oats",
    ],
    lunch: [
      "Balanced thali (roti, rice, dal, vegetables)",
      "Grilled chicken with salad and brown rice",
      "Vegetable biryani with raita",
      "Fish curry with roti and vegetables",
    ],
    dinner: [
      "Light soup with whole grain bread",
      "Vegetable khichdi",
      "Grilled paneer with vegetables",
      "Dal with roti and salad",
    ],
    snacks: [
      "Mixed fruits",
      "Nuts and seeds",
      "Homemade smoothies",
      "Roasted makhana",
    ],
    avoid: [
      "Excessive sugar and sweets",
      "Trans fats and fried foods",
      "Excessive salt",
      "Processed meats",
      "Sugary beverages",
    ],
  };

  const DietCard = ({ data, color = "primary" }: { data: typeof diabetesDiet; color?: string }) => (
    <div className="space-y-6">
      {/* Recommendations */}
      <Card className="p-6 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Key Recommendations</h3>
        </div>
        <ul className="space-y-2">
          {data.recommendations.map((rec, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
              <span className="text-muted-foreground">{rec}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Meal Plans */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h4 className="font-semibold">Breakfast Options</h4>
          </div>
          <ul className="space-y-2">
            {data.breakfast.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <Apple className="h-4 w-4 text-primary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h4 className="font-semibold">Lunch Options</h4>
          </div>
          <ul className="space-y-2">
            {data.lunch.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <Salad className="h-4 w-4 text-primary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h4 className="font-semibold">Dinner Options</h4>
          </div>
          <ul className="space-y-2">
            {data.dinner.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <Heart className="h-4 w-4 text-primary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h4 className="font-semibold">Healthy Snacks</h4>
          </div>
          <ul className="space-y-2">
            {data.snacks.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <Apple className="h-4 w-4 text-primary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Foods to Avoid */}
      <Card className="p-6 bg-destructive/5 border-destructive/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-destructive/10 rounded-lg">
            <XCircle className="h-5 w-5 text-destructive" />
          </div>
          <h3 className="text-xl font-semibold">Foods to Avoid</h3>
        </div>
        <ul className="grid sm:grid-cols-2 gap-2">
          {data.avoid.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-destructive" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
              <p className="text-xs sm:text-sm font-semibold text-primary">Nutrition Guidance</p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
              Diet <span className="text-primary">Charts & Plans</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Comprehensive nutritional guidance for diabetes, hypertension, and general wellness. 
              These diet plans are designed to help you maintain optimal health.
            </p>
          </div>
        </div>
      </section>

      {/* Diet Charts */}
      <section className="py-8 sm:py-12 container mx-auto px-4 sm:px-6">
        <Card className="p-4 sm:p-6 mb-6 sm:mb-8 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Important Note</p>
              <p className="text-sm text-muted-foreground">
                These diet charts are general guidelines. Always consult with your doctor before 
                making significant dietary changes, especially if you have medical conditions or 
                are taking medications.
              </p>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="diabetes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8 h-auto">
            <TabsTrigger value="diabetes" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5">
              <Droplet className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Diabetes</span>
            </TabsTrigger>
            <TabsTrigger value="hypertension" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>BP/Hypertension</span>
            </TabsTrigger>
            <TabsTrigger value="general" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5">
              <Salad className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>General</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="diabetes">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Diabetes Management Diet</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                A balanced diet plan to help control blood sugar levels and manage diabetes effectively.
              </p>
            </div>
            <DietCard data={diabetesDiet} />
          </TabsContent>

          <TabsContent value="hypertension">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Hypertension (High BP) Diet</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                DASH diet principles to help lower blood pressure and maintain cardiovascular health.
              </p>
            </div>
            <DietCard data={hypertensionDiet} />
          </TabsContent>

          <TabsContent value="general">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">General Wellness Diet</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                A well-rounded nutrition plan for overall health and disease prevention.
              </p>
            </div>
            <DietCard data={generalHealth} />
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </div>
  );
};

export default DietCharts;
