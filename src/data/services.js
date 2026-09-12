import floor1 from "../assets/gallery/floor-1.jpg";
import floor2 from "../assets/gallery/floor-2.jpg";
import floor3 from "../assets/gallery/floor-3.jpg";
import floor4 from "../assets/gallery/floor-4.jpg";
import floor5 from "../assets/gallery/floor-5.jpg";
import floor6 from "../assets/gallery/floor-6.jpg";
import floor7 from "../assets/gallery/floor-7.jpg";
import floor8 from "../assets/gallery/floor-8.jpg";
import floor9 from "../assets/gallery/floor-9.jpg";
import paint1 from "../assets/gallery/paint-1.jpg";
import paint2 from "../assets/gallery/paint-2.jpg";
import paint3 from "../assets/gallery/paint-3.jpg";
import paint4 from "../assets/gallery/paint-4.jpg";
import paint5 from "../assets/gallery/paint-5.jpg";
import paint6 from "../assets/gallery/paint-6.jpg";
import paint7 from "../assets/gallery/paint-7.jpg";
import paint8 from "../assets/gallery/paint-8.jpg";
import drywall1 from "../assets/gallery/drywall-1.jpg";
import mudtape1 from "../assets/gallery/mudtape-1.jpg";
import stain1 from "../assets/gallery/stain-1.jpg";

export const SERVICES = [
  {
    slug: "painting",
    name: "Painting",
    short: "Interior and exterior",
    tagline: "Paint is the easy part. Getting the wall ready for it is the actual job.",
    body: "Interior or exterior, the process does not change just because nobody can see the parts that matter. Holes get filled, corners get caulked, glossy surfaces get scuffed enough to actually hold paint, and everything gets taped like the job depends on it, because it does. Two coats minimum, rolled in one direction, cut in by hand instead of guessed at with tape that lifts halfway through drying. Exterior work adds a weather window and a primer that actually matches what is underneath it, not just what was convenient at the store.",
    includes: [
      "Surface prep, patching, and caulking before a single drop of paint shows up",
      "Cut in by hand along trim, ceilings, and corners",
      "Two full coats, rolled in the same direction every time",
      "Exterior jobs get a primer that actually matches what is underneath, not a guess",
      "Cleanup that does not leave drop cloth lint behind as a parting gift",
    ],
    cover: paint3,
    gallery: [paint1, paint2, paint3, paint4, paint5, paint6, paint7, paint8],
  },
  {
    slug: "drywall",
    name: "Drywall",
    short: "Hanging, patching, repair",
    tagline: "A wall does not get to have opinions about being crooked.",
    body: "New construction, a patch the size of a doorknob, or an entire basement that used to be somebody's failed weekend project, drywall goes up the same disciplined way every time. Studs get checked for square before anything gets hung, because a crooked wall behind good drywall is still a crooked wall. Screws get set to depth instead of driven until the paper tears. Seams get staggered on purpose, not by accident, so the whole wall does not crack along one convenient line the first time the house settles.",
    includes: [
      "Studs checked and shimmed before anything gets hung, not after",
      "Screws set to depth, never driven through the paper",
      "Seams staggered on purpose so cracks do not get a straight line to follow",
      "Patch work blended into existing texture instead of standing out like a bandage",
      "Sections damaged by water or mold cut back to solid material instead of covered over",
    ],
    cover: drywall1,
    gallery: [drywall1],
  },
  {
    slug: "mud-and-tape",
    name: "Mud and Tape",
    short: "Seam and finish work",
    tagline: "Invisible is the whole point.",
    body: "This is the step that decides whether a wall looks hung by a professional or held together by hope. Tape goes on straight and gets embedded, not just pressed down and prayed over. Three coats, each one wider than the last, each one sanded before the next goes on, because skipping a sanding pass just moves the ridge to the paint stage where it becomes somebody else's problem. Corners get a bead that stays a corner instead of rounding off over the first winter. The test is not how it looks under a work light. It is how it looks under a bare bulb at a bad angle, because that is the light every homeowner eventually finds.",
    includes: [
      "Tape embedded properly, not just pressed down and left to hope",
      "Three coats, each one sanded before the next goes on",
      "Corner bead that holds a line instead of rounding off with age",
      "Edges feathered so the repair does not read as a repair",
      "Checked under raking light before it gets called finished",
    ],
    cover: mudtape1,
    gallery: [mudtape1],
  },
  {
    slug: "flooring",
    name: "Flooring",
    short: "Installation",
    tagline: "Floors do not get second chances. Measured accordingly.",
    body: "Flooring has one advantage over paint and one disadvantage over everything else. Nobody lays a floor twice because the color looked different in the store, so it gets measured twice, acclimated to the room for the time it actually needs instead of the time that is convenient, and laid with expansion gaps sized for the season, not just the manufacturer's minimum. Transitions get planned before the first plank goes down, not improvised at the doorway when the math stops working. Underlayment goes down flat, because a floor is only as level as what is underneath it pretending not to matter.",
    includes: [
      "Full acclimation time before installation begins",
      "Expansion gaps sized for the season, not just the minimum on the box",
      "Transitions planned before the first plank goes down, not improvised at the doorway",
      "Underlayment leveled first, since a floor is only as flat as what is underneath it",
      "Layout planned in advance to avoid slivers along the walls",
    ],
    cover: floor4,
    gallery: [floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floor9],
  },
  {
    slug: "staining",
    name: "Staining",
    short: "Decks, trim, cabinetry",
    tagline: "Wood already knows how to look good. This just lets it.",
    body: "Staining rewards patience and punishes shortcuts almost immediately, which is why the prep takes longer than the actual staining. Old finish gets stripped or sanded back to bare wood, not just scuffed enough to accept a new coat on top of the old one's mistakes. Stain goes on with the grain, wiped back before it pools into blotches, and built up in coats instead of one heavy pass that looks fine wet and wrong the moment it dries. A clear topcoat goes on last, because color without protection is just a temporary opinion about how the wood should look.",
    includes: [
      "Old finish stripped or sanded back to bare wood",
      "Stain applied and wiped with the grain, not against it",
      "Multiple thin coats instead of one heavy pass",
      "Clear topcoat added for actual protection, not just color",
      "Hardware and fixtures removed instead of taped around",
    ],
    cover: stain1,
    gallery: [stain1],
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    short: "Siding, decks, driveways",
    tagline: "The most convincing magic trick available for under a tank of gas.",
    body: "Five years of dirt looks like a maintenance problem. It is usually just a cleaning problem wearing a maintenance problem's clothes. Siding, decks, walkways, and driveways get washed at a pressure that actually matches the surface, because the same setting that strips grime off concrete will also strip the finish off a deck if nobody adjusts it first. Detergent goes on the tough spots and gets time to actually work before the water shows up. The result usually looks less like cleaning and more like a decision was made to replace something, which is a compliment nobody minds.",
    includes: [
      "Pressure and nozzle matched to the surface, not one setting for everything",
      "Detergent treatment on oil stains, algae, and mildew before rinsing",
      "Decks washed at a setting that will not chew up the grain",
      "Gutters and soffits included on request",
      "Driveways and walkways done edge to edge, not just what shows from the street",
    ],
    cover: null,
    gallery: [],
  },
];

export const SLIDESHOW_IMAGES = [paint7, stain1, paint3, paint8, drywall1];

export const PHONE_DISPLAY = "705 206 5682";
export const PHONE_TEL = "7052065682";

export const CONTACT_EMAIL = "jazzitupcontracting@gmail.com";

// TODO: get a free access key at https://web3forms.com by entering
// jazzitupcontracting@gmail.com there (they email you the key instantly,
// no account/password needed). Paste it here. Until this is a real key,
// submissions will fail and the form will tell the visitor to call/text.
export const WEB3FORMS_ACCESS_KEY = "ba282925-26d4-4cca-a7e9-34ff24b6357e";

// Could not confirm the exact Facebook page URL, so this points to a
// search for the page name instead of guessing a possibly-wrong link.
// Swap in the real page URL (facebook.com/yourpagename) once you have it.
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61589590684910";