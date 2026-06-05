using SmartLGU.Application.Residents.Commands.RegisterResident;
using SmartLGU.Application.Residents.Dtos;

namespace SmartLGU.Application.Residents.Services;

public interface IResidentDataProvider
{
    Task<IReadOnlyCollection<ResidentDto>> GetResidentsAsync(CancellationToken cancellationToken);

    Task<ResidentDto?> GetResidentByIdAsync(int id, CancellationToken cancellationToken);

    Task<ResidentDto> RegisterResidentAsync(RegisterResidentCommand command, CancellationToken cancellationToken);
}
