class PageNavigator
{
  init(params)
  {
    if (this.isInit)
    {
      return;
    }

    this.toggle = document.getElementById('main-nav-toggle');
    if (!this.toggle instanceof HTMLElement)
    {
      throw Error("Navigation: Can't find toggle node");
    }

    this.menu = document.getElementById('main-nav-menu');
    if (!this.menu instanceof HTMLElement)
    {
      throw Error("Navigation: Can't find menu node");
    }

    this.toggle.addEventListener('click', () => this.switch());

    this.isOpen = typeof(params.isOpen) === "boolean" ? params.isOpen : false;
    this.updateState();
  }

  switch()
  {
    this.isOpen = !this.isOpen;

    this.updateState();
  }

  updateState()
  {
    this.isOpen ? this.open() : this.close();
  }

  open()
  {
    this.toggle.classList.remove('main-nav__toggle--close');
    this.toggle.classList.add('main-nav__toggle--open');

    this.menu.style.display = 'block';
  }

  close()
  {
    this.toggle.classList.remove('main-nav__toggle--open');
    this.toggle.classList.add('main-nav__toggle--close');

    this.menu.style.display = 'none';
  }
}

export const pageNavigator = new PageNavigator();
