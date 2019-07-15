export interface Well {
  id: string;
  uwid: string;
  wellName: string;
  licenseNumber: string | null;
  area: string | null;
  field: string | null;
  totalDepth: number | null;
  drillDate: string | null;
  status: string | null;
}

export interface WellHistory {
  id: string;
  uwid: string;
  wellId: string;
  changeDate: string;
  admin: string;
  adminId: string;
  action: string;
}

export enum WellProps {
  uwid = 'unique well id',
  wellName = 'well name',
  licenseNumber = 'license number',
  area = 'drilling area',
  field = 'drill field',
  totalDepth = 'total drill depth',
  drillDate = 'drill date',
  status = 'current status'
}

export enum WellPlaceholders {
  uwid = 'e.g. 02/10-23-058-W5/00',
  wellName = 'e.g. CPEC COUTTS 9-4-1-17',
  licenseNumber = 'e.g. 039501A',
  area = 'e.g. Comrey',
  field = 'e.g. 0234',
  totalDepth = 'e.g. 1158.20 (in meters)',
  drillDate = 'e.g. 10/10/2018',
  status = 'e.g. active'
}

export enum WellStatus {
  NONE,
  ACTIVE,
  INACTIVE,
  DEAD,
  PRODUCTION,
  ABD
}

export enum WellActions {
  Add = 'Added',
  Update = 'Updated',
  Delete = 'Deleted'
}
