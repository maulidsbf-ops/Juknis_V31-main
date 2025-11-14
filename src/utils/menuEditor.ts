import { menuData, MenuItem, MenuData } from '../data/menuData';

export const addMenuItem = (menuKey: string, submenuId: string, newItem: string): boolean => {
  if (!menuData[menuKey]) {
    console.error(`Menu key "${menuKey}" tidak ditemukan`);
    return false;
  }

  const submenu = menuData[menuKey].find(item => item.id === submenuId);
  if (!submenu) {
    console.error(`Submenu dengan ID "${submenuId}" tidak ditemukan di menu "${menuKey}"`);
    return false;
  }

  if (!submenu.items) {
    submenu.items = [];
  }

  submenu.items.push(newItem);
  return true;
};

export const removeMenuItem = (menuKey: string, submenuId: string, itemIndex: number): boolean => {
  if (!menuData[menuKey]) {
    console.error(`Menu key "${menuKey}" tidak ditemukan`);
    return false;
  }

  const submenu = menuData[menuKey].find(item => item.id === submenuId);
  if (!submenu || !submenu.items) {
    console.error(`Submenu dengan ID "${submenuId}" tidak ditemukan atau tidak memiliki items`);
    return false;
  }

  if (itemIndex < 0 || itemIndex >= submenu.items.length) {
    console.error(`Index ${itemIndex} tidak valid`);
    return false;
  }

  submenu.items.splice(itemIndex, 1);
  return true;
};

export const updateMenuItem = (
  menuKey: string,
  submenuId: string,
  itemIndex: number,
  newText: string
): boolean => {
  if (!menuData[menuKey]) {
    console.error(`Menu key "${menuKey}" tidak ditemukan`);
    return false;
  }

  const submenu = menuData[menuKey].find(item => item.id === submenuId);
  if (!submenu || !submenu.items) {
    console.error(`Submenu dengan ID "${submenuId}" tidak ditemukan atau tidak memiliki items`);
    return false;
  }

  if (itemIndex < 0 || itemIndex >= submenu.items.length) {
    console.error(`Index ${itemIndex} tidak valid`);
    return false;
  }

  submenu.items[itemIndex] = newText;
  return true;
};

export const getMenuItems = (menuKey: string, submenuId: string): string[] | null => {
  if (!menuData[menuKey]) {
    console.error(`Menu key "${menuKey}" tidak ditemukan`);
    return null;
  }

  const submenu = menuData[menuKey].find(item => item.id === submenuId);
  if (!submenu) {
    console.error(`Submenu dengan ID "${submenuId}" tidak ditemukan`);
    return null;
  }

  return submenu.items || [];
};

export const exportMenuData = (): string => {
  return JSON.stringify(menuData, null, 2);
};

export const importMenuData = (jsonString: string): boolean => {
  try {
    const importedData = JSON.parse(jsonString);
    Object.keys(menuData).forEach(key => delete menuData[key]);
    Object.assign(menuData, importedData);
    return true;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return false;
  }
};
