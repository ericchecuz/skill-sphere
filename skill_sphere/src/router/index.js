import { createRouter, createWebHistory } from "vue-router";

// Importa le viste
import HomeView from "../components/views/home.vue";
import RoadmapView from "../components/views/roadMap.vue";
import MatchingView from "../components/views/matching.vue";
import WorkspaceView from "../components/views/workspace.vue";
import ShowcaseView from "@/components/views/showCase.vue";
import Containment from "@/components/showcase/ContainmentComponents.vue";
import Navigation from "@/components/showcase/NavigationComponents.vue";
import FormInputs from "@/components/showcase/FormInputs.vue";
import DataDisplay from "@/components/showcase/DataDisplay.vue";

// Configura le rotte
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/roadmap",
    name: "Roadmap",
    component: RoadmapView, // Assicurati che sia corretto
  },
  {
    path: "/matching",
    name: "Matching",
    component: MatchingView,
  },
  {
    path: "/workspace",
    name: "Workspace",
    component: WorkspaceView,
  },
  {
    path: "/showcase",
    name: "Showcase",
    component: ShowcaseView,
    children: [
      { path: "containment", component: Containment },
      { path: "navigation", component: Navigation },
      { path: "form-inputs", component: FormInputs },
      { path: "data-display", component: DataDisplay },
    ],
  },
];

// Crea il router usando Vue 3
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
