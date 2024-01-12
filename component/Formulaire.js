import { useState } from 'react';
import style from './style.css';
 

const Formulaire = () => {

const [formData, setFormData] = useState({
    marque : '',
    annee :0 ,
    kilometrage : '' ,
    puissance : '' ,
    typeCarburant:'',
    boiteVitesse:'',
    etat:'',
    origine:'',
    nbPortes:0,
    premiereMain:false,
    prix: 0,
    titre: '',
    description:'',
    options:[]
})

const handleFormData = e =>
setFormData(prevState => ({...prevState,
  [e.target.name]: e.target.value,
}));

const handleButton = (name, value) => {
    setFormData((prevState) => {
      let updatedOptions;
  
      if (prevState.options.includes(value)) {
        updatedOptions = prevState.options.filter((option) => option !== value);
      } else {
        updatedOptions = [...prevState.options, value];
      }
  
      return {
        ...prevState,
        [name]: typeof prevState[name] === 'boolean' ? !prevState[name] : value,
        options: updatedOptions,
      };
    });
  };
  
const Formulaire = (e) => {
    e.preventDefault();
    console.log(formData);
  }

return(
    <form onSubmit={Formulaire}>
        <div>
            <h2>Détails de l'annonce</h2>
            <p>Ajouter plus de détails sur votre annonce pour une maximum de visibilité</p>
        </div>
        <div>
            <label>Marque 
        
            <select 
            value ={formData.marque}
            onChange={handleFormData}
            name="marque"
            required>

                <option value="selectionner">Sélectionner</option>
                <option value="renault">Renault</option>
                <option value="citroen">Citroën</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
                <option value="ford">Ford</option>
           
            </select>
            </label>

            <label>Année-Modèle 
            <select 
            type='number'
            value ={formData.annee}
            onChange={handleFormData}
            name="annee">

                <option>Sélectionner</option>
                <option value={1990}>1990</option>
                <option value={1991}>1991</option>
                <option value={1992}>1992</option>
                <option value={1993}>1993</option>
                <option value={1994}>1994</option>
                <option value={1995}>1995</option>
        
            </select>
            </label>
        </div>
        <div>
            <label>Kilométrage 
            <select 
            value ={formData.kilometrage}
            onChange={handleFormData}
            name="kilometrage">

                <option value="selectionner">Sélectionner</option>
                <option value="0-10000">0-10000</option>
                <option value="10000-20000">10000-20000</option>
                <option value="20000-30000">20000-30000</option>
                <option value="30000-40000">30000-40000</option>
                <option value="40000-50000">40000-50000</option>
                <option value="50000-60000">50000-60000</option>
        
            </select>
            </label>

            <label>Puissance fiscale: 
            <select 
            value ={formData.puissance.value}
            onChange={handleFormData}
            name="puissance">

                <option value="selectionner">Sélectionner</option>
                <option value="4cv">4 CV</option>
                <option value="5cv">5 CV</option>
                <option value="6cv">6 CV</option>
                <option value="7cv">7 CV</option>
                <option value="8cv">8 CV</option>
                <option value="9cv">9 CV</option>
        
            </select>
            </label>
<div>
        <label>Type de carburant </label>
        <div>
          <button
            name="typeCarburant"
            value="diesel"
            style={{ backgroundColor: formData.typeCarburant === 'diesel' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('typeCarburant', 'diesel')}
          >
            Diesel
          </button>

          <button
            name="typeCarburant"
            value="essence"
            style={{ backgroundColor: formData.typeCarburant === 'essence' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('typeCarburant', 'essence')}
          >
            Essence
          </button>

          <button
            name="typeCarburant"
            value="electrique"
            style={{ backgroundColor: formData.typeCarburant === 'electrique' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('typeCarburant', 'electrique')}
          >
            Electrique
          </button>

          <button
            name="typeCarburant"
            value="LPG"
            style={{ backgroundColor: formData.typeCarburant === 'LPG' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('typeCarburant', 'LPG')}
          >
            LPG
          </button>

          <button
            name="typeCarburant"
            
            style={{ backgroundColor: formData.typeCarburant === 'hybride' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('typeCarburant', 'hybride')}
          >
            Hybride
          </button>
        </div>
      </div>
    </div>
    
      <label>Boite de vitesse </label>
      <div>
            <button
            name="boiteVitesse"
            value="automatique"
            style={{ backgroundColor: formData.boiteVitesse === 'automatique' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('boiteVitesse', 'automatique')}>
                Automatique
            </button>

            <button
            name="boiteVitesse"
            value="manuelle"
            style={{ backgroundColor: formData.boiteVitesse === 'manuelle' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('boiteVitesse', 'manuelle')}>
                Manuelle
            </button>
    </div>

   
        <label>État </label>
    <div>
        <button
            name="etat"
            value="excellent"
            style={{ backgroundColor: formData.etat === 'excellent' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('etat', 'excellent')}>
                Excellent
        </button>

        <button
            name="etat"
            value="tresbon"
            style={{ backgroundColor: formData.etat === 'tresbon' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('etat', 'tresbon')}>
            Très bon
        </button>

        <button
            name="etat"
            value="bon"
            style={{ backgroundColor: formData.etat === 'bon' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('etat', 'bon')}>
                Bon
        </button>

        <button
            name="etat"
            value="correct"
            style={{ backgroundColor: formData.etat === 'correct' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('etat', 'correct')}>
                Correct
        </button>

        <button
            name="etat"
            value="endommage"
            style={{ backgroundColor: formData.etat === 'endommage' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('etat', 'endommage')}>
                Endommagé
        </button>

        <button
            name="etat"
            value="pourPiece"
            style={{ backgroundColor: formData.etat === 'pourPiece' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('etat', 'pourPiece')}>
                Pour pièces
        </button>

        <button
            name="etat"
            value="neuf"
            style={{ backgroundColor: formData.etat === 'neuf' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('etat', 'neuf')}>
                Neuf
        </button>
    </div>
    
    <label>Origine </label>
    <div>
        <button
            name="origine"
            value="dedouannee"
            style={{ backgroundColor: formData.origine === 'dedouannee' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('origine', 'dedouannee')}>
                Dédouannée
        </button>

        <button
            name="origine"
            value="pasDedouannee"
            style={{ backgroundColor: formData.origine === 'pasDedouannee' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('origine', 'pasDedouannee')}>
                Pas encore dédouannée
        </button>


        <button
            name="origine"
            value="wwMaroc"
            style={{ backgroundColor: formData.origine === 'wwMaroc' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('origine', 'wwMaroc')}>
                WW au Maroc
        </button>

        <button
            name="origine"
            value="importeeNeuve"
            style={{ backgroundColor: formData.origine === 'importeeNeuve' ? 'lightblue' : 'white' }}
            onClick={() => handleButton('origine', 'importeeNeuve')}>
                Importée neuve
        </button>
    </div>
 
    <label>Nombre de portes </label>
    <div>
        <button
            name="nbPortes"
            style={{ backgroundColor: formData.nbPortes === 3 ? 'lightblue' : 'white' }}
            onClick={() => handleButton('nbPortes', 3)}>
                3
        </button>
        <button
            name="nbPortes"
            
            style={{ backgroundColor: formData.nbPortes === 5 ? 'lightblue' : 'white' }}
            onClick={() => handleButton('nbPortes', 5)}>
                5
        </button>
    </div>

    <label>Première main</label>
    <div>
        <button
            name="premiereMain"
            style={{
                backgroundColor: formData.premiereMain ? 'lightblue' : 'white',
            }}
            onClick={() => handleButton('premiereMain', true)}
            >
            Oui
        </button>
        <button
            name="premiereMain"
            style={{
                backgroundColor: !formData.premiereMain ? 'lightblue' : 'white',
            }}
            onClick={() => handleButton('premiereMain', false)}
            >
            Non
        </button>

    <div>
    <h2>Information de l'annonce</h2>
    <p>Une annonce avec un prix exacte et une description bien détaillée a 10 fois plus de visibilité</p>
    </div>
        <label>Prix</label>
        <div>
        <input
          type='number'
          value={formData.prix}
          onChange={handleFormData}
          name='prix'
        />
        </div>
    </div>
    <label>Titre de l'annonce</label>
    <div>
    <input
    value={formData.titre}
    onChange={handleFormData}
    name='titre'
    minLength={5}
    maxLength={100}
    placeholder="Titre de l'annonce"
    />
    </div>
    
    <label>Texte de l'annonce</label>
    <div>
    <input
    class='textannonce'
    value={formData.description}
    onChange={handleFormData}
    name='description'
    minLength={20}
    maxLength={1800}/>

    </div>

    <h2>Plus de détail</h2>
    <p>Ajouter des détails supplémentaires</p>
    
    <div>
    <button
    name="options"
    value="jantesalu"
    style={{ backgroundColor: formData.options.includes('jantesalu') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'jantesalu')}
    >
            Jantes aluminium
    </button>
    <button
    name="options"
    value="airbags"
    style={{ backgroundColor: formData.options.includes('airbags') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'airbags')}
    >
            Airbags
    </button>
    <button
    name="options"
    value="climatisation"
    style={{ backgroundColor: formData.options.includes('climatisation') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'climatisation')}
    >
            Climatisation
    </button>
    <button
    name="options"
    value="systemeNav"
    style={{ backgroundColor: formData.options.includes('systemeNav') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'systemeNav')}
    >
            Système de Navigation
    </button>
    <button
    name="options"
    value="toitOuvrant"
    style={{ backgroundColor: formData.options.includes('toitOuvrant') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'toitOuvrant')}>
            Toit ouvrant

    </button>
    <button
    name="options"
    value="siegesCuir"
    style={{ backgroundColor: formData.options.includes('siegesCuir') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'siegesCuir')}
    >
            Sièges en cuir
    </button>
    <button
    name="options"
    value="radarRecul"
    style={{ backgroundColor: formData.options.includes('radarRecul') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'radarRecul')}
    >
            Radar de recul
    </button>
    <button
    name="options"
    value="cameraRecul"
    style={{ backgroundColor: formData.options.includes('cameraRecul') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'cameraRecul')}
    >
            Caméra de recul
    </button>
    <button
    name="options"
    value="vitresElec"
    style={{ backgroundColor: formData.options.includes('vitresElec') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'vitresElec')}
    >
            Vitres électriques
    </button>
    <button
    name="options"
    value="ABS"
    style={{ backgroundColor: formData.options.includes('ABS') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'ABS')}
    >
            ABS
    </button>
    <button
    name="options"
    value="ESP"
    style={{ backgroundColor: formData.options.includes('ESP') ? 'lightblue' : 'white' }}
    onClick={() => handleButton('options', 'ESP')}
    >
            ESP
    </button>

    </div>
      
      <button>Envoie de l'annonce</button>
    </form>



)


}

export default Formulaire