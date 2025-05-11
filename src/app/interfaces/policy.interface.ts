export enum PolicyStatus {
  unknown = 'Unknown',
  pending_aor = 'Pending AOR',
  pending_cms = 'Pending CMS',
  pending_application_request = 'Pending Application Request',
  active = 'Active',
  issued = 'Issued',
  placed = 'Placed',
  withdrawn = 'Withdrawn',
  wrong_sep = 'Wrong SEP',
  rejected = 'Rejected',
  future_cancellation = 'Future Cancellation',
  cancelled = 'Cancelled',
  pending = 'Pending',
}

export enum Carrier {
  anthem_enclave = 'Anthem - Elevance',
  anthem_maine = 'Anthem - Maine',
  bcbs_empire_ny = 'BCBS - Empire (NY)',
  bcbs_louisiana_dsnp = 'BCBS - Louisiana - (DSNP ONLY)',
  devoted = 'Devoted',
  highmark = 'Highmark',
  humana = 'Humana',
  humana_careplus = 'Humana - Careplus',
  simply = 'Simply',
  uhc = 'UHC',
  wellcare = 'Wellcare',
  wellcare_allwell = 'Wellcare - AllWell',
  wellcare_trillium = 'Wellcare - Trillium Advantage',
  wellcare_healthnet = 'Well Care - HealthNet',
  wellpoint = 'Wellpoint',
  zing = 'Zing',
}

export enum SourceOfLead {
  rock = 'Rock',
  hip_hop = 'Hip Hop',
  country = 'Country',
  pop = 'Pop',
  reggae = 'Raggae',
}

export interface Policy {
  id: number;
  policy_type: string;
  status: PolicyStatus;
  carrier: Carrier;
  assignedTo: string;
  agent_one: string;
  agent_two: string;
  date_Sale_made: string;
  effective_Date: string;
  contact: string;
  source_of_lead: SourceOfLead;
  policy_number: string;
  medicare_number: string;
  plan_and_network_id: string;
  old_ma_plan: string;
  old_ma_premium: string;
  new_ma_plan: string;
  new_ma_premium: string;
  sep: string;
  prescriptions: string;
  contact_dob: string;
  part_a_sale_date: string;
  part_b_sale_date: string;
  doctors: string[];
  medications: string[];
}
