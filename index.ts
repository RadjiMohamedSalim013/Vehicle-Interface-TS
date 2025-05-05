interface Véhicule {
    make: string;         // Marque du véhicule 
    model: string;        // Modèle 
    year: number;         // Année 
    start(): void;        // Méthode qui démarre le véhicule
  }


class Voiture implements Véhicule {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("voiture a démarré");
    }
  }

  const maVoiture = new Voiture("Toyota", "Toyota", 2025);

  maVoiture.start(); // Cela devrait afficher : "Car engine started"
  