import { servicesMenu } from "@/lib/services-menu";

// The "Service" dropdown on the contact form: the main offerings only, named as the site's Services menu names them.
// It is built from that menu, so a new top-level service appears here without editing this file.

export const contactServices: string[] = servicesMenu.map((c) => c.label);

const known = new Set(contactServices);

/** Whether a submitted value is one of the services in the dropdown. */
export const isKnownService = (value: string) => known.has(value);
